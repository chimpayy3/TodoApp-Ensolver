const express = require('express');
const cors = require('cors');

const app = express();
//settings
app.use(cors());
//routes

var task = require('./app/routes/task');

app.use('/task', task);

app.listen(4000, () => {
    console.log('App listening on port 4000')
});
