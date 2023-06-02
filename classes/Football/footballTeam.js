class footballTeam {
    constructor(clubName, country) {
        this.club = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = +age;
            playerValue = +playerValue;

            let filtered = this.invitedPlayers.find(el => el.name == name);
            if (filtered) {
                if (filtered.value < playerValue) {
                    filtered.value = playerValue;
                }
            } else {
                this.invitedPlayers.push({
                    name: name,
                    age: age,
                    value: playerValue
                });
            }
        }
        let names = this.invitedPlayers.map(el => `${el.name}`).join(', ');
        return `You succesfully invite ${names}.`;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');
        offer = +offer;

        let filtered = this.invitedPlayers.find(el => el.name == name);
        if (filtered) {
            if (filtered.value > offer) {
                let priceDifference = filtered.value - offer;
                console.log(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
            } else {
                filtered.value = 'Bought';
                console.log(`Congratulations! You sign a contract with ${name} for ${offer} million dollars.`)
            }
        } else {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    ageLimit(name, age) {
        let filtered = this.invitedPlayers.find(el => el.name == name);
        if (!filtered) {
            return `${name} is not invited to the selection list!`
        } else {
            if (filtered.age < age) {
                let diff = age - filtered.age;
                if (diff < 5 && diff >= 1) {
                    return `${name} will sign a contract for ${diff} years with ${this.club} in ${this.country}!`
                }
                if (diff >= 5) {
                    return `${name} will sign a full 5 years contract for ${this.club} in ${this.country}!`
                }
            } else {
                throw new Error(`${name} is above age limit!`);
            }
        }
    }
    transferWindowResult() {
        console.log(`Players list:`);
        console.log(this.invitedPlayers.map(el => `Player ${el.name} - ${el.value}`).join('\n'));
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));
console.log(fTeam.ageLimit("Lionel Messi", 33));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.transferWindowResult());