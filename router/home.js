const express = require('express');
const router = express.Router();
router
    .route('/')
        .get((req, res) => res.send('GET HOME'))
        .post((req, res) => res.send('POST HOME'));
module.exports = router;