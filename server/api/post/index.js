'use strict';

var express = require('express');
var controller = require('./post.controller.js');
import auth from 'cavecanem';

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth, controller.create);
router.put('/:id', auth, controller.update);
router.delete('/:id', auth, controller.destroy);

module.exports = router;
