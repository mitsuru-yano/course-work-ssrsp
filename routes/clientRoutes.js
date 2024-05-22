const express = require('express');
const { Client} = require('../models/associations');


const clientRoutes = express.Router();


clientRoutes.post('/create', async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

clientRoutes.get('/getAll', async (req, res) => {
    try {
        const clients = await Client.findAll()
        if (clients.length === 0) {
            return res.status(404).json({ error: 'Clients not found' });
        }
        res.status(201).json(clients);
    } catch (e) {
        console.error(e)
    }
})

clientRoutes.get('/get/:id', async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id)
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(201).json(client);
    } catch (e) {
        console.error(e)
    }
})

clientRoutes.delete('/delete/:id', async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        await client.destroy();
        res.status(204).send().json('Success');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

clientRoutes.patch('/edit/:id', async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        await client.update(req.body);
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = clientRoutes;