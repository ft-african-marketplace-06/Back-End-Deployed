const router = require("express").Router();

const Items = require("./model");

router.get("/", (req, res, next) => {
 Items.get()
  .then((item) => {
   res.status(200).json(item);
  })
  .catch(next);
});

router.get("/:id", async (req, res, next) => {
 const { item_id } = req.params;
 try {
  const item = await Items.getById(item_id);

  if (!item) {
   next();
  } else {
   res.status(200).json(item);
  }
 } catch (err) {
  next(err);
 }
});

module.exports = router;
