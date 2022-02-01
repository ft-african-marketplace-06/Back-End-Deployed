const Items = require("./model");

const itemValidation = (req, res, next) => {
 const { item_category, item_name, item_price, location_id } = req.body;

 if (!item_category || !item_name || !item_price || !location_id) {
  next({
   status: 400,
   message: `Please fill ${item_price} ,${item_name}, ${item_category}, ${location_id} fields`,
  });
 } else {
  next();
 }
};

const validateItemId = async (req, res, next) => {
 const { item_id } = req.param;
 try {
  const exitingItem = await Items.getById(item_id);
  if (!exitingItem) {
   next({ status: 404, message: "Item does not exist" });
  } else {
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
