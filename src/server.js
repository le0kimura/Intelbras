
const express = require("express");

const routes = require("./routes");



const cron = require('node-cron');
cron.schedule('0 0 * * *', () => {
    console.log('todo dia meia noite');
});
cron.schedule('* * * * *', () => {
    console.log('Verifica Geral');
});

require('./database');
const app = express();

app.use(express.json());
app.use(routes);
app.listen(8081);