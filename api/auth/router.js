const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets/index.js');
const Users = require('../users/model.js');

const { validateBody, checkUsernameExists, checkUsernameDoesNotExist } = require('./middleware.js');


router.post('/register', validateBody, checkUsernameExists, (req, res, next) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.insertUser(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(next);
});

router.post('/login', validateBody, checkUsernameDoesNotExist,  (req, res, next) => {
  const { password } = req.body;

  if (bcrypt.compareSync(password, req.existingUser.password)) {
    const payload = {
      subject: req.existingUser.user_id,
      username: req.existingUser.username,
    }

    const options = {
      expiresIn: '1d'
    }

    const token = jwt.sign(payload, JWT_SECRET, options);
    res.status(200).json({ message: `Welcome, ${req.existingUser.username}`, token });
  } else {
    next({ status: 401, message: 'Invalid credentials' });
  }
});

module.exports = router;
