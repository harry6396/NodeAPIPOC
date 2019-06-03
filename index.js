const express = require('express');
const app = express();

const port = 3000;

const server = app.listen(port);

server.timeout = 1000 * 60 * 10; // 10 minutes

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/api/endpoint', (req, res) => {
    res.send(JSON.stringify({value: 1}));
})