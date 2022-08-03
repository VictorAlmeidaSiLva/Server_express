const express = require ('express');
const cors = require('cors');
const userRoutes = require('./userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/usuarios', userRoutes);

module.exports = app;