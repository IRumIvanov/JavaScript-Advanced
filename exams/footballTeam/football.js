class footballTeam {
    constructor(clubName, country, invitedPlayer) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayer = [];
    }
    newAdditions(footballPlayers) {
        let invited = [];
        let isInvited = false;
        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            let found = this.invitedPlayer.find(el => el.name == name);
            if (!found) {
                isInvited = true;
                this.invitedPlayer.push({
                    name: name,
                    age: age,
                    value: playerValue
                });
                invited.push(name);
            } else {
                if (found.value < playerValue) {
                    found.value = playerValue;
                }
            }
        }
        if (isInvited) {
            return `You successfully invite ${invited.join(', ')}.`;
        }
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let found = this.invitedPlayer.find(el => el.name == name);
        if (!found) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            if (found.value > playerOffer) {
                let diff = found.value - playerOffer;
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${diff} million more are needed to sign the contract!`)
            } else {
                found.value = "Bought";
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
            }

        }
    }
    ageLimit(name, age) {
        let found = this.invitedPlayer.find(el => el.name == name);
        if (!found) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {
            if (found.age > age) {
                return `${name} is above age limit!;`
            } else {
                let diff = age - found.age;
                if (diff >= 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                } else {
                    return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
                }
            }
        }
    }
    transferWindowResult() {
        let arrPlayer = [];
        let sorted = this.invitedPlayer.sort((a, b) => a.name.localeCompare(b.name));
        for (let player of sorted) {
            let values = Object.values(player);
            arrPlayer.push(`Player ${values[0]}-${values[2]}`);
        }
        return `Players list:\n${arrPlayer.join('\n')}`
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));