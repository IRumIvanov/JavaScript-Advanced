function deckOfCards(cards) {
    let arrOfCards = [];
    let isCard = false;
    let falseCard;

    function factory(face, suit) {
        let result = {
            face,
            suit,
            toString() {
                return `${result.face}${result.suit}`;
            }
        };

        if (result.face >= 2 && result.face <= 10 ||
            result.face === 'J' || result.face === 'Q' ||
            result.face === 'K' || result.face === 'A') {

            if (suit === 'S') {
                result.suit = '\u2660'; //'♠';
            } else if (suit === 'H') {
                result.suit = '\u2665'; //'♥';
            } else if (suit === 'D') {
                result.suit = '\u2666'; //'♦';
            } else if (suit === 'C') {
                result.suit = '\u2663' //'♣';
            } else {
                isCard = true;
                falseCard = `Invalid card: ${result.face}${result.suit}`;
                // return `Invalid card: ${result.face}${result.suit}`;
            }
        } else {
            isCard = true;
            falseCard = `Invalid card: ${result.face}${result.suit}`;
            // return `Invalid card: ${result.face}${result.suit}`;

        }

        return result.toString();
    }

    for (let i = 0; i < cards.length; i++) {
       
        let first = cards[i].substring(0, cards[i].length-1);
        let last = cards[i][cards[i].length - 1];

            arrOfCards.push(factory(first, last));
    }
    if (isCard) {
        return falseCard;
    } else {
        return arrOfCards.join(' ');
    }
}

const assert = require('chai').assert;

describe('deckOfCards', function() {
    it('should return A♠ 10♦ K♥ 2♣ when given [AS, 10D, KH, 2C]', function() {
        assert.equal(deckOfCards(['AS', '10D', 'KH', '2C']), 'A♠ 10♦ K♥ 2♣');
      });
      it('should return Invalid card: 1C when given [5S, 3D, QD, 1C]', function() {
        assert.equal(deckOfCards(['5S', '3D', 'QD', '1C']), 'Invalid card: 1C');
      });
      
})