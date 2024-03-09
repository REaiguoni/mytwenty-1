// Import necessary libraries or modules
const express = require('express');
const axios = require('axios');

// Create an Express application
const app = express();

// Define a route to provide real-time price tracking of Bitcoin
app.get('/bitcoin-price', async (req, res) => {
    try {
        // Fetch real-time price data from an API (replace this with your actual data source)
        const response = await axios.get('https://api.example.com/bitcoin/price');

        // Extract current price of Bitcoin from the response
        const bitcoinPrice = response.data.price;

        // Send the current price of Bitcoin as JSON response
        res.json({ price: bitcoinPrice });
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
