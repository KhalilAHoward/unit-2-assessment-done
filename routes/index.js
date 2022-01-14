var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');
const { todos } = require('../models/todo');

/* GET home page. */
router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);

module.exports = router;

