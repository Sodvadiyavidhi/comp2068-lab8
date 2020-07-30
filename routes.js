const router = require('express').Router();

// Our resource routes
(require('./routes/pages'))(router);
(require('./routes/blogs'))(router);

module.exports = router;