const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const dbConfig2 = require('../config/database2');


const User = require('../models/User');
const User2 = require('../models/User');
const connection = new Sequelize(dbConfig);
const connection2 = new Sequelize(dbConfig2);




User.init(connection);
User2.init(connection2);
module.exports = connection;
module.exports = connection2;


