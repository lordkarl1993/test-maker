var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send("test");
})

app.listen(8084, function(){
	console.log("Listening on port 8084");
});