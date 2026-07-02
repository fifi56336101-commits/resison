const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

router.post('/enroll', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    // Check if exists
    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      return res.status(400).json({ error: 'You are already enrolled.' });
    }

    const newLead = new Lead({ name, email });
    await newLead.save();

    res.status(201).json({ message: 'Successfully enrolled!', lead: newLead });
  } catch (error) {
    console.error('Enroll error:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;
