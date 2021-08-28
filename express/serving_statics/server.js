const express = require('express');

app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));
// for multiple static assets
// app.use('/static', express.static('files'))

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.listen(8080, () => {
    console.log('Server running on 8080');
});
