const router = require('express').Router();

// Our resource routes
(require('./routes/pages'))(router);
(require('./routes/blogs'))(router);
(require('./routes/users'))(router);
(require('./routes/sessions'))(router);
(require('./routes/images'))(router);
module.exports = router;