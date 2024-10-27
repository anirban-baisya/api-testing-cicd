const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample endpoint
app.get('/api/v1/status', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
