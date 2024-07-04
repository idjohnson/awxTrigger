const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 80;

// Middleware to parse JSON body
app.use(express.json());

// Route handler for POST requests
app.get('/', async (req, res) => {
    try {
        // Replace with your actual username and password
        const username = 'USERNAMEREPLACE';
        const password = 'PASSWORDREPLACE';

        // Make a POST request to mytest.com
        const response = await fetch('https://awx.freshbrewed.science/api/v2/job_templates/11/launch/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        // Get the response status code
        const statusCode = response.status;

        // Send the status code as the response
        res.status(statusCode).send(`AWX Response code: ${statusCode}`);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal server error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`AWX Trigger server listening on port ${PORT}`);
});
