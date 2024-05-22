const express = require('express');
const sequelize = require('./config/database');
const clientRoutes = require('./routes/clientRoutes');
const orderRoutes = require("./routes/orderRoutes");
const contractorRoutes = require("./routes/contractorRoutes");

const app = express();

app.use(express.json());
app.use('/api/client', clientRoutes);
app.use('/api/contractor', contractorRoutes);
app.use('/api/order', orderRoutes);

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});
