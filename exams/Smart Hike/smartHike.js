class SmartHike {
    constructor(userName) {
        this.userName = userName;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`;
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        } else {
            if (this.resources === 0) {
                throw new Error(`You don't have enough resources to start the hike`);
            }
        }
        let diff = this.resources - time * 10;
        if (diff < 0) {
            return `You don't have enough resources to complete the hike`;
        } else {
            this.resources -= time * 10;
            this.listOfHikes.push({
                peak: peak,
                time: time,
                difficultyLevel: difficultyLevel
            });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }
    rest(time) {
        this.resources += time * 10;
        const restTime = this.resources >= 100 ?
            `Your resources are fully recharged. Time for hiking!` : `You have rested for ${time} hours and gained ${time*10}% resources`;
        return restTime;
    }
    showRecord(criteria) {
        if (this.listOfHikes == '') {
            return `${this.userName} has not done any hiking yet`;
        } else {
            let soorted = this.listOfHikes.sort((a, b) => a.difficultyLevel - b.difficultyLevel);
            if (criteria == 'all') {
                console.log(`All hiking records:`);
                for (let hike of this.listOfHikes) {
                    console.log(`${this.userName} hiked ${hike.peak} for ${hike.time} hours`)
                }
            } else {
                if (criteria == 'easy') {
                    let filtered = soorted.filter(el => el.difficultyLevel == criteria).sort((a, b) => a.time - b.time);
                    if (filtered.length !== 0) {
                        return `${this.userName}'s best ${criteria} hike is ${filtered[0].peak} peak, for ${filtered[0].time} hours`
                    } else {
                        return `${this.userName} has not done any easy hiking yet`;
                    }
                }
                if (criteria == 'hard') {
                    let filtered = soorted.filter(el => el.difficultyLevel == criteria).sort((a, b) => a.time - b.time);
                    if (filtered.length !== 0) {
                        return `${this.userName}'s best ${criteria} hike is ${filtered[0].peak} peak, for ${filtered[0].time} hours`
                    } else {
                        return `${this.userName} has not done any hard hiking yet`;
                    }
                }
                if (criteria !== 'hard' && criteria !== 'easy' && criteria !== 'all') {
                    `${this.userName} has not done any ${criteria} hiking yet`
                }
            }
        }

    }

}
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'hard'));
// //console.log(user.hike('Everest', 12, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));
// user.addGoal('Rui', 1706);
// //user.hike('Rui', 3, 'hard');
// console.log(user.showRecord('hard'));
// console.log(user.showRecord('all'));


let newHike = new SmartHike('Vili');

console.log(newHike.addGoal("Musala", 2925)) //, "You have successfully added a new goal - Musala");
console.log(newHike.hike("Musala", 8, "hard")) //, "You hiked Musala peak for 8 hours and you have 20% resources left");
console.log(newHike.showRecord("easy")) //, "Vili has not done any easy hiking yet");
console.log(newHike.addGoal("Vihren", 2914)) //, "You have successfully added a new goal - Vihren");
console.log(newHike.hike("Vihren", 4, "hard")) //, "You don't have enough resources to complete the hike");
console.log(newHike.showRecord("hard")) //, "Vili's best hard hike is Musala peak, for 8 hours");
console.log(newHike.addGoal("Rui", 1706)) //, "You have successfully added a new goal - Rui");
console.log(newHike.hike("Rui", 3, "easy")) //, "You don't have enough resources to complete the hike");
console.log(newHike.showRecord("all")) //, "All hiking records:\nVili hiked Musala for 8 hours");