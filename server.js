var multer = require('multer');
var app = require('express')();

app.set('views', './views');
app.set('view engine', 'pug');

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {

    res.render('index');
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});