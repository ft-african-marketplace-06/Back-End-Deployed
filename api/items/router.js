const router = require("express").Router();
const { validateItemId, itemValidation } = require("./middleware");
const Items = require("./model");

const { restricted } = require('../auth/middleware.js');

router.get("/", (req, res, next) => {
 Items.get()
  .then((item) => {
   res.status(200).json(item);
  })
  .catch(next);
});

router.get("/:id", validateItemId, async (req, res, next) => {
 try {
  res.status(200).json(req.existingItem);
 } catch (err) {
  next(err);
 }
});

router.put("/:id", restricted, validateItemId, itemValidation, async (req, res, next) => {
 const { id } = req.params;
 try {
  const updatedItem = await Items.edit(id, req.existingItem);
  res.status(202).json(updatedItem);
 } catch (err) {
  next(err);
 }
});

router.post("/", restricted, itemValidation, async (req, res, next) => {
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

router.delete("/:id", restricted, validateItemId, async (req, res, next) => {
 try {
  const { id } = req.params;
  const item = await Items.remove(id);
  res.json(item);
 } catch (err) {
  next(err);
 }
});

module.exports = router;
