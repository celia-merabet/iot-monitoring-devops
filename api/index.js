const express = require('express');
const app = express();
const port = 3000;

app.get('/api/status', (req, res) => {
    res.json({status: 'OK', message: 'API IoT Monitor en fonctionnement'});
});

app.listen(port, () => {
    console.log(`API IoT Monitor listening at http://localhost:${port}`);
});
