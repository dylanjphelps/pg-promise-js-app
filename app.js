const express = require('express');
var routes = require('./routes/index');
const port = 3000;

const app = express();

app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})