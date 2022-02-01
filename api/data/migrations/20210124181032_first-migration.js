exports.up = async (knex) => {
  await knex.schema.createTable("users", (users) => {
    users.increments("user_id");
    users.string("username", 200)
      .notNullable()
      .unique();
    users.string("password", 200).notNullable();
    users.boolean("is_owner").defaultTo(false);
  });

  await knex.schema.createTable("locations", (location) => {
    location.increments("location_id");
    location.string("location_name").notNullable();
  });

  await knex.schema.createTable("items", (items) => {
    items.increments("item_id");
    items.string("item_category").notNullable();
    items.string("item_name").notNullable();
    items.string("item_description");
    items.decimal("item_price").notNullable();
    items.integer("location_id").notNullable();
    items.foreign("location_id").references("location_id").inTable("locations");
    items.integer("user_id").notNullable();
    items.foreign("user_id").references("user_id").inTable("users");
  });

};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("locations");
  await knex.schema.dropTableIfExists("items");
};
