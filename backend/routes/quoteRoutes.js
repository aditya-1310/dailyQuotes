const express = require('express');
const axios = require('axios');
const router = express.Router();
const Quote = require('../models/Quote');
require('dotenv').config();

const API_URL = 'https://api.api-ninjas.com/v1/quotes';
const API_KEY = process.env.API_KEY;

// Get random quote
router.get('/random', async (req, res) => {
    try {
        
        const response = await axios.get(`${API_URL}?category=success`, {
            headers: {
                'X-Api-Key': API_KEY
            }
        });
        const quote = response.data[0];
        res.json(quote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Search quotes by author
router.get('/search', async (req, res) => {
    const author = req.query.author;
    try {
        const quotes = await Quote.find({ author: new RegExp(author, 'i') });
        if (quotes.length === 0) {
            return res.status(404).json({ message: 'No quotes found for this author' });
        }
        res.json(quotes);
    } catch (err) {
        console.error('Error searching quotes by author:', err);
        res.status(500).json({ message: 'Interna Server Error' });
    }
});
router.get('/authors', async (req, res) => {
    try {
        const authors = await Quote.distinct('author');
        res.json(authors);
    } catch (err) {
        console.error('Error fetching authors:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
