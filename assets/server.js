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
var customers = [{
	name: 'Potato',
	phone: 5555551234,
	email: 'potato@potato.org',
	id: 'Potato'
},{
	name: 'Banana',
	phone: 5555551234,
	email: 'banana@potato.org',
	id: 'Banana'
},{
	name: 'Orange',
	phone: 5555551234,
	email: "orange@potato.org",
	id: 'Orange'
}, {
	name: 'Coffee',
	phone: 5555551234,
	email: 'coffee@potato.org',
	id: 'Coffee'
}, {
	name: 'Table',
	phone: 5555551234,
	email: 'table@potato.org',
	id: 'Table'
}, {
	name: 'Glasses',
	phone: 5555551234,
	email: 'glasses@potato.org',
	id: 'Glasses'
}, {
	name: 'Laptop',
	phone: 5555551234,
	email: 'laptop@potato.org',
	id: 'Laptop'
}
];


// Routes
app.get('/', function(req, res) {
    res.send('Reserve a table.');
    });

//Grab the first five customers
app.get('/view', function(req, res) {
	
for (var i = 0; i<customers.length; i++){
	if (i < 5) {
		//add code to add cust to table 
		// $("#reservation").append('<h2 id="reserve">'+customers[i].id)+"</h2>" 
		console.log("reserved: "+customers[i].id);
	} 
else {
	//add code to add cust to waiting list
	console.log("waitlisted: "+customers[i].id);
}
	

}
})

	








//listener

app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);

});
