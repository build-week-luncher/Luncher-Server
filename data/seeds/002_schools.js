
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {id: 1, schoolName: 'Sage Creek Elementary', details: 'Anything here!', needAmount: "520"}
      ]);
    });
};
