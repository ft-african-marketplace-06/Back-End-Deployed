const Items = require("./model");

const itemValidation = (req, res, next) => {
 const { item_category, item_name, item_price, location_id, user_id } =
  req.body;

 if (!item_category || !item_name || !item_price || !location_id || !user_id) {
  res.status(400).json({
   message: `Please fill item_price , item_name, item_category, location_id fields`,
  });
 } else {
  next();
 }
};

const validateItemId = async (req, res, next) => {
 const { id } = req.params;
 try {
  const existingItem = await Items.getById(id);
  if (!existingItem) {
   res.status(404).json({ message: "Item does not exist" });
  } else {
   req.existingItem = existingItem;
   next();
  }
 } catch (err) {
  next(err);
 }
};

module.exports = {
 itemValidation,
 validateItemId,
};
