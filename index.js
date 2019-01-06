var express = require('express');
var bodyParser = require('body-parser');
var low = require('lowdb');
var FileSync =  require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

 db = low(adapter);
db.defaults({ users: [] })
   .write();

var app = express();

app.set('view engine', 'pug')
app.set('views',"./views")

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// var users = [
//     {id: 1, name: "Thinh"},
//     {id: 2, name: "Anh"},
//     {id: 3, name: "Quang"}
// ]

app.get('/',function(req, res) {
    res.render('index',{
        name: "Quang Anh"
    })
});

app.get('/users', function(req, res){
    res.render('users/index',{
        users: db.get('users').value()
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

app.get('/users/:id', function(req,res){
    var id =req.params.id;

    var user = db.get('users').find({id:id}).value();
    console.log(user);
    res.render('users/view',{
        user: user
    })
})

app.post('/users/create', function(req, res){
    // users.push(req.body);
    db.get('users').push(req.body).write();
    console.log(req.body);
    res.redirect('/users');
})
app.listen(3000, ()=> console.log("app listening  on port 3000"))