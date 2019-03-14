
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donors').del()
    .then(function () {
      // Inserts seed entries
      return knex('donors').insert([
        {id: 1, username: 'donor', password: '$2a$10$laqr4v9zRm1bk3z6LEJuAe2H3/RFSRz7ENPez5giOQDi.vSplgLIu', firstName: 'Test', lastName: 'Donor'}
      ]);
    });
};
