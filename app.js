/**
 * Created by Amit Thakkar on 08/01/15.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('build'));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('NodeJS App with GulpJS listening at http://%s:%s', host, port);
});