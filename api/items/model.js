const db = require("../data/db-config");

const get = () => {
 return db("items");
};

const getById = (id) => {
 return db("items").where("item_id", id).first();
};

const create = async (item) => {
 const [id] = await db("items").insert(item);
 const newItem = await getById(id);
 return newItem;
};

module.exports = {
 get,
 getById,
 create,
};
