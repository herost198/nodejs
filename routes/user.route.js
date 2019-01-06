var express = require('express');
var router = express.Router();
var db =  require('../db');
var shortid = require('shortid');
router.get('/', function(req, res){
    res.render('users/index',{
        users: db.get('users').value()
    });
})

router.get('/search', function(req, res){
    var q =  req.query.q;
    var matchedUsers =  users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    console.log(q);
    res.render('users/index',{
        users: matchedUsers
    });
});

router.get('/create', function(req, res){
    res.render('users/create');
})

router.get('/:id', function(req,res){
    var id =req.params.id;

    var user = db.get('users').find({id:id}).value();
    console.log(user);
    res.render('users/view',{
        user: user
    })
})

router.post('/create', function(req, res){
    // users.push(req.body);
    db.get('users').push(req.body).write();
    console.log(req.body);
    res.redirect('/users');
})

module.exports = router;