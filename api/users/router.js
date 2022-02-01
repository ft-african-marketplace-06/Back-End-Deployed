const router = require('express').Router();
const Users = require('./model.js');

const { validateUser, checkUsernameExists } = require('./middleware.js');

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
})
  
router.post('/', validateUser, checkUsernameExists, async (req, res, next) => {
    // Need to implement password hashing
    try {
        const user = await Users.insertUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
})

module.exports = router;
  