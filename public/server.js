const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '/')));

// API endpoint (Example: Fetch data)
app.get('/api/data', (req, res) => {
    res.json({ message: "Server is live and running" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
