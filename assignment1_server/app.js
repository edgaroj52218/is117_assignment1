const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files from the "htmlfiles" directory
app.use(express.static(path.join(__dirname, 'htmlfiles')));

// Define the route for the root URL to serve "index1.html"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles', 'index1.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
