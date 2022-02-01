const location = [
    {
      location_name: "Dallas",
    },
    {
      location_name: "Atlanta",
    },
    {
      location_name: "Chicago",
    },
    {
      location_name: "Boston",
    },
  ];
  
  exports.location = location;
  
  exports.seed = function (knex) {
    return knex("locations").insert(location);
  };