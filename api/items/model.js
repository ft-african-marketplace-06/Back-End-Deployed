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
