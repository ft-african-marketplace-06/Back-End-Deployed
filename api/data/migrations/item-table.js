exports.up = async (knex) => {
  await knex.schema.createTable("items", (items) => {
    items.increments("item_id");
    items.string("item_category").notNullable();
    items.string("item_name").notNullable();
    items.string("item_description").notNullable();
    items.decimal("item_price").notNullable();
    items.string("item_location").notNullable();
    items.integer("user_id").notNullable();
    items.foreign("user_id").references("user_id").inTable("users");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("items");
};