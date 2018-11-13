const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const shows = require('./shows');
const path = require('path');

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/rest/shows', (req, res) => res.send(shows.movies))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log('${port}'))




