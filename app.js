const express = require('express');
const { getTreasures, getTreasuresSortByAge } = require('./controllers/treasures.controllers');


const app = express();
app.use(express.json());

app.get('/api/treasures', getTreasures);
//app.get('/api/treasures?sort_by=age', getTreasuresSortByAge);

module.exports = app;