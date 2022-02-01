const router = require("express").Router();
const { validateItemId, itemValidation } = require("./middleware");
const Items = require("./model");

router.get("/", (req, res, next) => {
 Items.get()
  .then((item) => {
   res.status(200).json(item);
  })
  .catch(next);
});

router.get("/:id", validateItemId, async (req, res, next) => {
 const { item_id } = req.params;
 try {
  const item = await Items.getById(item_id);
  res.status(200).json(item);
 } catch (err) {
  next(err);
 }
});

router.put("/:id", validateItemId, itemValidation, async (req, res, next) => {
 const { item_id } = req.params;
 try {
  const updatedItem = await Items.edit(item_id);
  res.status(202).json(updatedItem);
 } catch (err) {
  next(err);
 }
});

router.post("/", itemValidation, async (req, res, next) => {
 try {
  const { item_category, item_name, item_price, location_id, user_id } =
   req.body;
  const createdItem = await Items.create({
   item_price,
   item_name,
   location_id,
   item_category,
   user_id,
  });
  res.status(201).json(createdItem);
 } catch (err) {
  next(err);
 }
});

module.exports = router;
