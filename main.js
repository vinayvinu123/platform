var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './public')));
app.get('/create', function(req, res){
	res.sendFile(path.join(__dirname, './pvt1.html'));
});
app.listen(8081);
console.log('Server Started listening on 8081');