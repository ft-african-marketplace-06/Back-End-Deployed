const Users = require('../users/model.js');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets/index.js');
  

const validateBody = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        next({ status: 400, message: 'Username and password required' });
    } else {
        next();
    }
}

const checkUsernameExists = async (req, res, next) => {
    const { username } = req.body;
    try {
      const existingUser = await Users.findBy({ username });
      if (existingUser.length === 0) {
        next();
      } else {
        next({ status: 403, message: 'Username is already in use' });
      }  
    } catch (err) {
      next(err);
    }
}

const checkUsernameDoesNotExist = async (req, res, next) => {
    const { username } = req.body;
    try {
      const existingUser = await Users.findBy({ username });
      if (existingUser.length === 0) {
        next({ status: 401, message: 'Invalid credentials' });
      } else {
        req.existingUser = existingUser[0];
        next();
      }  
    } catch (err) {
      next(err);
    }
}

const restricted = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        next({ status: 401, message: 'Token required' });
    } else {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err) {
                next({ status: 401, message: 'Token invalid' });
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    }
}

  
module.exports = { validateBody, checkUsernameExists, checkUsernameDoesNotExist, restricted };