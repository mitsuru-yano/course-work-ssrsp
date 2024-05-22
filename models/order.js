const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Client = require('./Client'); // Импорт модели Client
const Contractor = require('./Contractor'); // Импорт модели Contractor

const Order = sequelize.define('Order', {
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    carNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    issue: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    deadline: {
        type: DataTypes.DATE,
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id'
        }
    },
    contractorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Contractor,
            key: 'id'
        }
    }
}, {
    tableName: 'Orders'
});

module.exports = Order;
