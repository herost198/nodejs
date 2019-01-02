var express = require('express');
var app = express();

app.set('view engine', 'pug')
app.set('views',"./views")

app.get('/',function(req, res) {
    res.send("hello world");
});

app.get('/user', function(req, res){
    res.send("User list")
})


app.listen(3000, ()=> console.log("app listening  on port 3000"))