const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contractor = sequelize.define('Contractor', {
    fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
    },
    exp: {
        type: DataTypes.FLOAT,
    }
}, {
    tableName: 'Contractors'
});

module.exports = Contractor;
