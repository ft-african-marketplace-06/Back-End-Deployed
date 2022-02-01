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
//  try {

//  } catch (err) {
//   next(err);
//  }
});

module.exports = router;
