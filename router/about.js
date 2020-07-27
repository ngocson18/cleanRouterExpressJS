const express = require('express');
const router = express.Router();
router
    .route('/')
        .get((req, res) => res.send('GET ABOUT'))
        .post((req, res) => res.send('POST ABOUT'));
module.exports = router;