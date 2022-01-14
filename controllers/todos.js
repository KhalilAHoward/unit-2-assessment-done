const Todos = require('../models/todo');

module.exports = {
    index,
    create,
}

function index(req, res){
    res.render('index', {
        todos: Todos.todos,
        title: 'To Do List'
    })
}

function create(req, res){
    console.log('create <--', req.body)
    let todo = req.body;
    todo.done = false;

    Todos.todos.push(todo);
    res.redirect('/');
}
