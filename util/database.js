
const Sequelize = require('sequelize');

const sequelize = new Sequelize('bhupesh', 'root', 'bhupesh', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;