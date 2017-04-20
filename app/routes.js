var fs = require('fs');

module.exports = function(app) {

    app.get('/api/displayData', function(req, res) {
        fs.readFile('./data.json', 'utf8', function (err, data) {
            if (err)
               res.end();

            res.send(data);
        });
    });

    app.get('/', function(req, res) {
        res.sendfile('./public/views/index.html');
    });

};