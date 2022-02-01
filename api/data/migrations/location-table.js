exports.up = async (knex) => {
    await knex.schema.createTable("location", (location) => {
      location.increments("location_id");
      location.string("location_name").notNullable();
    });
  };
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("location");
  };