exports.up = async (knex) => {
  await knex.schema.createTable("users", (users) => {
    users.increments("user_id");
    users.string("username", 200).notNullable().unique();
    users.string("password", 200).notNullable();
    users.boolean("is_owner").defaultTo(false);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("users");
};
