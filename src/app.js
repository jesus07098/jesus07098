const express = require('express');
const path = require('path');
const app = express();
const morgan= require('morgan');
const mongoose= require('mongoose');

//connecting to db

mongoose.connect('mongodb://localhost/crud-mongo')
.then(db=>console.log('DB  connected'))
.catch(err=> console.log(err));

//importing routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routes
app.use('/', indexRoutes);


//starting server
app.listen(app.get('port'), () => {
console.log(`Server on port ${app.get('port')}`);
});
