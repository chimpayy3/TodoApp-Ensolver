
var express = require('express');
var bodyParser = require('body-parser');
var task = require('../models/task');

var router = express.Router();
router.use(bodyParser.json());


router.route('')
    .get(async function (req, res, next) {
        let response = await task.getTasks();
        res.send(response)
    })
    .post(async function(req,res,next){
        let name = req.body.name;
        let description = req.body.description;
        if(!description){
            description = '';
        }
        let response = await task.createTasks(name,description);       
        res.send(response);
    })
    .put(async function(req,res,next){
        let id = req.body.task_id;
        let name = req.body.name;
        let description = req.body.description;
        let response = await task.updateTasks(name,description,id);       
        res.send(response);
    })
	.delete(async function (req, res, next) {
        let id = req.body.task_id;
        let response = await task.deleteTasks(id);       
        res.send(response);
    })

router.route('/addtolist')
    .post(async function(req,res,next){
        let task_id = req.body.task_id
        let id = req.body.id;
        let response = await task.addToList(id,task_id);       
        res.send(response);
    })
	.delete(async function (req, res, next) {
        let id = req.body.task_id;
        let response = await task.deleteFromList(id);       
        res.send(response);
    })

router.route('/list')
    .get(async function (req, res, next) {
        let response = await task.getLists();
        res.send(response)
    })
    .post(async function(req,res,next){
        let name = req.body.name;
        let color = req.body.color;
        let response = await task.createList(name,color);       
        res.send(response);
    })
    .put(async function(req,res,next){
        let id = req.body.task_id;
        let name = req.body.name;
        let response = await task.updateList(name,id);       
        res.send(response);
    })
	.delete(async function (req, res, next) {
        let id = req.body.task_id;
        let response = await task.deleteList(id);       
        res.send(response);
    })


module.exports = router



