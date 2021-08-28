const express = require('express');

const app = express();

const HOST = 'localhost',
    PORT = 5000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT, HOST, () => {
    console.log(`Server running on ${HOST}:${PORT}`);
})

