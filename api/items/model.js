const db = require("../data/db-config");

const get = () => {
 return db("items");
};

const getById = (id) => {
 return db("items").where("item_id", id).first();
};

const create = async (item) => {
 const [newItem] = await db("items").insert(item, [
  "user_id",
  "item_category",
  "item_name",
  "item_price",
  "location_id",
 ]);

 return newItem;
};

const edit = async (id, item) => {
 return db("items").where("item_id", id).update(item);
};

const remove = (id) => {
 return db("items").where("item_id", id).del();
};

module.exports = {
 get,
 getById,
 create,
 edit,
 remove,
};
