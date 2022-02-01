const router = require('express').Router();
const Locations = require('./model.js');

router.get('/', async (req, res, next) => {
    try {
        const locations = await Locations.getAll();
        res.status(200).json(locations);
    } catch (err) {
        next(err);
    }
});

module.exports = router;