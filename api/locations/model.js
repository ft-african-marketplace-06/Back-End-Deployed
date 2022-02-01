const db = require('../data/db-config.js');

function getAll() {
    return db('locations');
}

module.exports = { getAll };