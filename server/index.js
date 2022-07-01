const express = require('express');
const app = express();

const db = require('./models');
const PORT = 3001;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on port ${PORT}`);
    });
});