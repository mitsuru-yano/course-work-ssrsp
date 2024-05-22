const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgresql://Danya:z3w9qxWtRErU@ep-nameless-poetry-a55i7wzs.us-east-2.aws.neon.tech/Eysa', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});