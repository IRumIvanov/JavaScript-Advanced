function solution() {
    class Balloons {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = hasWeight;

        }
    }
    class PartyBalloons extends Balloons {
        constructor(color, hasWeight, ribbonColor, ribbonWeight) {
            super(color, hasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonWeight = ribbonWeight;

            PartyBalloons.prototype._ribbon = {
                color: this.ribbonColor,
                length: this.ribbonWeight
            };

            return {
                color: this.color,
                hasWeight: this.hasWeight,
                _ribbon: {
                    color: this.ribbonColor,
                    length: this.ribbonWeight
                }
            }
        }

    }

    class BirthdayBalloon extends PartyBalloons {
        constructor(color, hasWeight, ribbonColor, ribbonWeight, text) {
            super(color, hasWeight, ribbonColor, ribbonWeight);
            this.text = text;
        }
        get() {
            return this._ribbon;
        }
    }
    return {
        Balloons: Balloons,
        PartyBalloons: PartyBalloons,
        BirthdayBalloon: BirthdayBalloon
    }
}

let classes = solution();
let testBalloon = new classes.Balloons("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloons("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon._ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);