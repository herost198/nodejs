var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoutes = require('./routes/user.route'); 
var port = 3000;

var app = express();

app.set('view engine', 'pug')
app.set('views',"./views")

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
// var users = [
//     {id: 1, name: "Thinh"},
//     {id: 2, name: "Anh"},
//     {id: 3, name: "Quang"}
// ]
app.use(express.static('public'));
app.get('/',function(req, res) {
    res.render('index',{
        name: "Quang Anh"
    })
});

app.use('/users', userRoutes);
 
app.listen(port, ()=> console.log(`app listening  on port ${port}`))