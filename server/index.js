const express = require('express');
const app = express();
const path = require('path');

const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

const contactRoute = require('./contact-route.js');
app.use('/api', contactRoute);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on port ${PORT}`);
    });
});