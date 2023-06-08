const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

const assert = require('chai').assert;
// bookSelection = require('../path/to/bookSelection');

describe('bookSelection', function () {
  describe('isGenreSuitable', function () {
    it('should return a message for a suitable genre and age', function () {
      const message = bookSelection.isGenreSuitable('Romance', 20);
      assert.equal(message, 'Those books are suitable');
    });

    it('should return a message for an unsuitable genre and age', function () {
      const message = bookSelection.isGenreSuitable('Thriller', 10);
      assert.equal(message, 'Books with Thriller genre are not suitable for kids at 10 age');
    });
  });

  describe('isItAffordable', function () {
    it('should return a success message if the price is affordable', function () {
      const message = bookSelection.isItAffordable(10, 20);
      assert.equal(message, 'Book bought. You have 10$ left');
    });

    it('should return an error message if the price is not affordable', function () {
      const message = bookSelection.isItAffordable(30, 20);
      assert.equal(message, "You don't have enough money");
    });

    it('should throw an error for invalid input', function () {
      assert.throw(() => bookSelection.isItAffordable('ten', 20), Error, 'Invalid input');
      assert.throw(() => bookSelection.isItAffordable(10, 'twenty'), Error, 'Invalid input');
    });
  });

  describe('suitableTitles', function () {
    it('should return an array of suitable titles for a valid input', function () {
      const array = [{
          title: 'Title 1',
          genre: 'Thriller'
        },
        {
          title: 'Title 2',
          genre: 'Romance'
        },
        {
          title: 'Title 3',
          genre: 'Thriller'
        },
      ];
      const result = bookSelection.suitableTitles(array, 'Thriller');
      assert.deepEqual(result, ['Title 1', 'Title 3']);
    });

    it('should throw an error for invalid input', function () {
      assert.throw(() => bookSelection.suitableTitles('not an array', 'Thriller'), Error, 'Invalid input');
      assert.throw(() => bookSelection.suitableTitles([], 123), Error, 'Invalid input');
    });
  });
});