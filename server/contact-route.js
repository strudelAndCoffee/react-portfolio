const router = require('express').Router();
const Contact = require('./models');

router.get('/', (req, res) => {
    Contact.findAll()
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    Contact.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;