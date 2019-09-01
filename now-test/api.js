const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        endpoint: '/'
    })
});

app.get('/books', (req, res) => {
    res.json({
        endpoint: '/books'
    })
});

app.listen(3000, () => {
    console.log('Listening on Port: 3000');
});