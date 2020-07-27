const express = require('express');
const router = express.Router();
router
    .route('/')
        .get((req, res) => res.send('GET ROOT'))
        .post((req, res) => res.send('POST ROOT'));
module.exports = router;