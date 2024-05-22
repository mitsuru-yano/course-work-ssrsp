const express = require('express');
const { Contractor} = require('../models/associations');

const contractorRoutes = express.Router();


contractorRoutes.post('/create', async (req, res) => {
    try {
        const contractor = await Contractor.create(req.body);
        res.status(201).json(contractor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

contractorRoutes.get('/getAll', async (req, res) => {
    try {
        const contractor = await Contractor.findAll()
        if (contractor.length === 0) {
            return res.status(404).json({ error: 'Contractor not found' });
        }
        res.status(201).json(contractor);
    } catch (e) {
        console.error(e)
    }
})

contractorRoutes.get('/get/:id', async (req, res) => {
    try {
        const contractor = await Contractor.findByPk(req.params.id)
        if (!contractor) {
            return res.status(404).json({ error: 'Contractor not found' });
        }
        res.status(201).json(contractor);
    } catch (e) {
        console.error(e)
    }
})

contractorRoutes.delete('/delete/:id', async (req, res) => {
    try {
        const contractor = await Contractor.findByPk(req.params.id);
        if (!contractor) {
            return res.status(404).json({ error: 'Contractor not found' });
        }
        await contractor.destroy();
        res.status(204).send().json('Success');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

contractorRoutes.patch('/edit/:id', async (req, res) => {
    try {
        const contractor = await Contractor.findByPk(req.params.id);
        if (!contractor) {
            return res.status(404).json({ error: 'Contractor not found' });
        }
        await contractor.update(req.body);
        res.status(200).json(contractor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = contractorRoutes;