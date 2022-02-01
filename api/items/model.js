const db = require("../data/db-config");

const get = () => {
 return db("items as i")
    .join('locations as l', 'i.location_id', 'l.location_id')
    .join('users as u', 'i.user_id', 'u.user_id')
    .select('item_id', 'u.username', 'l.location_name', 'item_name', 'item_category', 'item_price', 'item_description');
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
