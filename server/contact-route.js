const router = require('express').Router();
const { Contact, ReadMore } = require('./models');

router.get('/readmore', (req, res) => {
    ReadMore.findAll()
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/contact', (req, res) => {
    Contact.findAll()
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

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

router.post('/readmore', (req, res) => {
    ReadMore.create()
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;