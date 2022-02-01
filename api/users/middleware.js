const Users = require('./model.js');

const validateUser = (req, res, next) => {
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
        next({ status: 403, message: 'Username is taken' });
      }  
    } catch (err) {
      next(err);
    }
}


module.exports = { validateUser, checkUsernameExists };