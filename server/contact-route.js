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

router.delete('/contact/:id', (req, res) => {
    Contact.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        if (!data) {
            res.status(404).json({ message: "No contact found with that ID." });
            return;
        }
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;