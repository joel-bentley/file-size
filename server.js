var multer = require('multer')({
    limits: {
        fileSize: 1e6
    },
});

var app = require('express')();

app.set('views', './views');
app.set('view engine', 'pug');

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/upload', multer.single('file'), function(req, res) {
    res.json({
        size: req.file.size
    });
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});