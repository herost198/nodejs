var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug')
app.set('views',"./views")

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var users = [
    {id: 1, name: "Thinh"},
    {id: 2, name: "Anh"},
    {id: 3, name: "Quang"}
]

app.get('/',function(req, res) {
    res.render('index',{
        name: "Quang Anh"
    })
});

app.get('/users', function(req, res){
    res.render('users/index',{
        users: users
    });
})

app.get('/users/search', function(req, res){
    var q =  req.query.q;
    var matchedUsers =  users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    console.log(q);
    res.render('users/index',{
        users: matchedUsers
    });
});

app.get('/users/create', function(req, res){
    res.render('users/create');
})

app.post('/users/create', function(req, res){
    users.push(req.body);
    console.log(req.body);
    res.redirect('/users');
})
app.listen(3000, ()=> console.log("app listening  on port 3000"))