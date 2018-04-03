// Import the library
const server = require('server');
var express = require('express');
var app =express();
var path    = require("path");

//respond with Hello World
app.get('/test',function(req,res){
	res.send('You\'re on the page One, pravin');
});

// Launch the server to always answer "Hello world"
server(ctx => 'Hello world!');

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/greeter.html')))

app.get('/about', (req, res) => res.sendFile(path.join(__dirname+'/about.html')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))