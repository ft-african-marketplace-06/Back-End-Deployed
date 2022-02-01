const items = [
    {
      item_category: "Beans",
      item_name: "Black Beans",
      item_description: "Magical Fruit, the more you eat...",
      item_price: 1,
      location_id: 1,
      user_id: 1,
    },
    {
      item_category: "Meat",
      item_name: "Ground Beef",
      item_description: "Beef, it's what's for dinner",
      item_price: 1,
      location_id: 1,
      user_id: 1,
    },
  ];
  
  exports.items = items;
  
  exports.seed = function (knex) {
    return knex("items").insert(items);
  };