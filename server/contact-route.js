const router = require('express').Router();
const { Contact, ReadMore } = require('./models');

router.post('/contact', (req, res) => {
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

router.post('/readmore', ({ body }, res) => {
    ReadMore.create({ type: body.type })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;