const users = [
    {
      username: "Carl",
      password: "1234",
    },
  ];
  
  exports.users = users;
  
  exports.seed = function (knex) {
    return knex("users").insert(users);
  };