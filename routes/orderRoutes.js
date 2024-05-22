const express = require('express');
const { Client, Order, Contractor} = require('../models/associations');

const orderRoutes = express.Router();


orderRoutes.post('/create', async (req, res) => {
    try {
        const { clientId, contractorId, ...orderData } = req.body;
        const client = await Client.findByPk(clientId);
        const contractor = await Contractor.findByPk(contractorId);

        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        if (!contractor) {
            return res.status(404).json({ error: 'Contractor not found' });
        }

        const order = await Order.create({ ...orderData, clientId, contractorId });
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

orderRoutes.get('/getAll', async (req, res) => {
    try {
        const orders = await Order.findAll()
        if (orders.length === 0) {
            return res.status(404).json({ error: 'Orders not found' });
        }
        res.status(201).json(orders);
    } catch (e) {
        console.error(e)
    }
})

orderRoutes.get('/get/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id)
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(201).json(order);
    } catch (e) {
        console.error(e)
    }
})

orderRoutes.get('/getAllByClient/:id', async (req,res) => {
    try {
        const order = await Order.findAll({ where: { clientId: req.params.id } });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(201).json(order);
    } catch (e) {
        console.error(e)
    }
})

orderRoutes.get('/getAllByContractor/:id', async (req,res) => {
    try {
        const order = await Order.findAll({ where: { contractorId: req.params.id } });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(201).json(order);
    } catch (e) {
        console.error(e)
    }
})

orderRoutes.delete('/delete/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        await order.destroy();
        res.status(204).send().json('Success');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

orderRoutes.patch('/edit/:id', async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        await order.update(req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = orderRoutes;
