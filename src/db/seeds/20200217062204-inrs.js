'use strict';
const faker = require("faker");
let inrs = [];

for(let i = 1; i <=15; i++){
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
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Inrs", inrs, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Inrs", null, {});
  }
};
