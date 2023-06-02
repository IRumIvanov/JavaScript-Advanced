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
            throw new Error('Error');
        }
    } else {
        throw new Error('Error');
    }

    return result.toString();
}
console.log(factory(11, 'S'))