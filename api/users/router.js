const router = require('express').Router();
const Users = require('./model.js');

const { validateUser, checkUsernameExists } = require('./middleware.js');

router.get('/', async (req, res) => {
    res.json(await Users.getAllUsers());
})
  
router.post('/', validateUser, checkUsernameExists, async (req, res) => {
    // Need to implement password hashing
    res.status(201).json(await Users.insertUser(req.body));
})

module.exports = router;
  