var express = require('express');
var app = express();

app.set('view engine', 'pug')
app.set('views',"./views")

app.get('/',(req, res) => res.send("hello world"));



app.listen(3000, ()=> console.log("app listening  on port 3000"))