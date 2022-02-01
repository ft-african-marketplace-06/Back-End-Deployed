const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const usersRouter = require('./users/router.js');
const locationsRouter = require('./locations/router.js');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', usersRouter);
server.use('/api/locations', locationsRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});  

module.exports = server
