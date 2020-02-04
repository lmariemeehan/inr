'use strict';
const faker = require("faker");
let inrs = [];

for(let i = 1; i <= 15; i++){
  inrs.push({
    date: new Date,
    result: faker.finance.amount(),
    notes: faker.lorem.sentence(),
    createdAt: new Date,
    updatedAt: new Date
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Inr", inrs, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Inr", null, {});
  }
};
