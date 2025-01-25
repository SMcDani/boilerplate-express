let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');

console.log("Hello World");

app.use(function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use('/public', express.static(__dirname + '/public'));

//#10 - putting here because it must be mounted before the routes that depend on it
app.use(bodyParser.urlencoded({ extended: false }));

//11
app.use('/name', (req, res) => {
    res.json({ name: req.body.first + ' ' + req.body.last});
});

app.get('/', function(req, res){res.sendFile(__dirname + '/views/index.html')});





/*app.get('/json', function(req, res){
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": "HELLO JSON"});
    } else{
        res.json({"message": "Hello json"});
    }
    
})*/

/*app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
    }, function(req, res){
        res.send({time: req.time});
    });*/

//#8
//app.get('/:word/echo', (req, res) => {res.send({'echo': req.params.word})});


//#9
app.get('/name', (req, res) => {
    res.json({ name: req.query.first + ' ' + req.query.last});
});




































 module.exports = app;
