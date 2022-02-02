const db = require('../data/db-config.js');

function getAllUsers() { 
    return db('users'); 
}

function findBy(filter) {
    return db('users')
      .select('user_id', 'username', 'password', 'is_owner')
      .where(filter);
}

async function insertUser(user) {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password', 'is_owner']);
  return newUserObject;
}

module.exports = { getAllUsers, findBy, insertUser };