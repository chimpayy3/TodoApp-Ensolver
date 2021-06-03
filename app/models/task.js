const db = require("../../dbconnection");

db.connection.connect();

const getTasks = ()=>
new Promise((resolve, reject) => {
	let response = [];
	db.connection.query('SELECT * FROM task',function(err,rows,field){
		if(err){
			reject(err)
		}
		for (element of rows ){
			response.push({id:element.task_id,nombre:element.name,descripcion:element.description,list_id:element.list_id})
		}
		resolve(response)
	})
});

const createTasks = (name,descrition)=>
new Promise((resolve, reject) => {
	db.connection.query('INSERT INTO task(name,description) VALUES (?,?)',[name,descrition],function(err,result){
		if(err){
			reject(err)
		}
		resolve(result)
	})
});

const updateTasks = (name,descrition,task_id)=>
new Promise((resolve, reject) => {
	db.connection.query('UPDATE task SET name=? ,description=? WHERE task_id = ?',[name,descrition,task_id],function(err,result){
		if(err){
			reject(err)
		}
		resolve(result)
	})
});

const deleteTasks = (task_id)=>
new Promise((resolve, reject) => {
	db.connection.query('DELETE FROM task WHERE task_id = ?',[task_id],function(err,result){
		if(err){
			reject(err)
		}
		resolve(result)
	})
});

const getLists = ()=>
new Promise((resolve, reject) => {
	let response = [];
	db.connection.query('SELECT * FROM list',function(err,rows,field){
		if(err){
			reject(err)
		}
		for (element of rows ){
			response.push({id:element.id,nombre:element.name,color:element.color})
		}
		resolve(response)
	})
});

const createList = (name,color)=>
new Promise((resolve, reject) => {
	db.connection.query('INSERT INTO list(name,color) VALUES (?,?)',[name,color],function(err,result){
		if(err){
			reject(err)
		}
		resolve(result)
	})
});

const updateList = (name,id)=>
new Promise((resolve, reject) => {
	db.connection.query('UPDATE list SET name=? WHERE id = ?',[name,id],function(err,result){
		if(err){
			reject(err)
		}
		resolve(result)
	})
});

const deleteList = (id)=>
new Promise((resolve, reject) => {
	db.connection.query('DELETE FROM list WHERE id = ?',[id],function(err,result){
		if(err){
			reject(err)
		}
		resolve(result)
	})
});

const addToList = (id,task_id)=>
new Promise((resolve, reject) => {
	db.connection.query('UPDATE task SET list_id=? WHERE task_id=?;',[id,task_id],function(err,result){
		if(err){
			reject(err)
		}
		resolve(result)
	})
});

const deleteFromList = (task_id)=>
new Promise((resolve, reject) => {
	db.connection.query('UPDATE task SET list_id = NULL WHERE task_id = ?;',[task_id],function(err,result){
		if(err){
			reject(err)
		}
		resolve(result)
	})
});


module.exports = {
	getTasks,
	createTasks,
	updateTasks,
	deleteTasks,
	getLists,
	createList,
	updateList,
	deleteList,
	addToList,
	deleteFromList
};