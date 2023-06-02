let traveler = [{
    description: 'Senior',
    Amount: 50
  },
  {
    description: 'Senior',
    Amount: 50
  },
  {
    description: 'Adult',
    Amount: 75
  },
  {
    description: 'Child',
    Amount: 35
  },
  {
    description: 'Infant',
    Amount: 25
  }
];

function amount(item) {
  return item.Amount;
}

function sum(prev, next) {
  return prev + next;
}

traveler.map(amount).reduce(sum);
// => 235;

// or use arrow functions
traveler.map(item => item.Amount).reduce((prev, next) => prev + next);