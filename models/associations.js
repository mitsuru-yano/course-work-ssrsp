const Client = require('./Client');
const Contractor = require('./Contractor');
const Order = require('./Order');

Client.hasMany(Order, { foreignKey: 'clientId' });
Contractor.hasMany(Order, { foreignKey: 'contractorId' });
Order.belongsTo(Client, { foreignKey: 'clientId' });
Order.belongsTo(Contractor, { foreignKey: 'contractorId' });

module.exports = { Client, Contractor, Order };
