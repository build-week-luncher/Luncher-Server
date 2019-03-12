exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "admin",
          password:
            "$2a$10$rehNF9MpnIjxMbsoClbGQOmMrV37OVCIfEt8AO3223bvHjtusWMWm"
        }
      ]);
    });
};
