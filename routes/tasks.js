const routes = require('express').Router();
const Task = require('../models/task');

// Get all tasks
routes.get('/', (req, res) => {
  Task.find(function(err, tasks) {
    if (err) res.send(err);
    res.json(tasks);
  });
});

// Get done tasks
routes.get('/done', (req, res) => {
  Task.find({done: true}, function(err, tasks) {
    if (err) res.send(err);
    res.json(tasks);
  });
});

// Get in progress tasks
routes.get('/undone', (req, res) => {
  Task.find({done: false}, function(err, tasks) {
    if (err) res.send(err);
    res.json(tasks);
  });
});

// Get task by id
routes.get('/:id', (req, res) => {
  Task.findById(req.params.id, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
});

// Create new task
routes.post('/', (req, res) => {
  console.log(req.fields);
  var task = new Task(req.fields);
  task.save(function(err, saveResult) {
    if (err) res.send(err);
    res.json(saveResult);
  });
});

// Edit task
routes.patch('/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.fields, {new: true}, function(err, saveResult) {
    if (err) res.send(err);
    res.json(saveResult);
  });
});

// Delete task
routes.delete('/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id, function(err, result) {
    if (err) res.send(err);
    res.json(result);
  });
});

module.exports = routes;
