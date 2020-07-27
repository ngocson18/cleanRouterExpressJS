const express = require('express');
const app = express();
const port = 3000;
require('./route-index')(app);
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});