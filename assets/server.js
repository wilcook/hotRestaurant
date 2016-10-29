// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

// parses the body as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// array to hold customer data
var customers = [];


// Routes
app.get('/', function(req, res) {
    res.send('Reserve a table.');
    });

app.get('/tables', function(req, res) {
	
})


for (var i = 0; i<customers.length; i++){
	
}







//listener

app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);

});
