
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {id: 1, schoolName: 'Art City Elementary', details: 'Anything here!', needAmount: "520"},
        {id: 2, schoolName: 'Brookside Elementary', details: 'Anything here!', needAmount: "620"},
        {id: 3, schoolName: 'Cherry Creek Elementary', details: 'Anything here!', needAmount: "390"},
        {id: 4, schoolName: 'Meadow Brook Elementary', details: 'Anything here!', needAmount: "680"},
        {id: 5, schoolName: 'Sage Creek Elementary', details: 'Anything here!', needAmount: "740"},
        {id: 6, schoolName: 'Westside Elementary', details: 'Anything here!', needAmount: "430"},
        {id: 7, schoolName: 'Springville Jr. High', details: 'Anything here!', needAmount: "650"},
        {id: 8, schoolName: 'Springville High', details: 'Anything here!', needAmount: "870"}
      ]);
    });
};
