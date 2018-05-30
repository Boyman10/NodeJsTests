var express = require('express');

var app = express();

/*Routes*/
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome home!');
})
    .get('/here', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.send('Welcome here my dear!');
    })
    .get('/there/1/room', function(req, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.send('Welcome there in room 1!');
    })
    .use(function(req, res, next){
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send('404 error !');
    });



app.listen(8080);