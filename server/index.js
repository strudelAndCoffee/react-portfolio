const express = require('express');
const app = express();
const cors = require('cors');

const sequelize = require('./config/connection');
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const contactRoute = require('./contact-route.js');
app.use('/api', contactRoute);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on port ${PORT}`);
    });
});