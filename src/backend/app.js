const express = require('express')
const app = express()
const port = 3001
const shows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(shows.movies))
app.listen(port, () => console.log('${port}'))