var express = require('express')
var app = express();
const Statsjs = require("./Modules/Stats.js");

var port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/Website'));

app.get('/', function(req, res) {
    if (req.method == "POST") {
        //95206881
        if (!JSON.stringify(req.rawHeaders).includes(2954706683)) {
	  console.log(req);
	  console.log("Not whitelisted");
          return;
        }
    
        var body = '';
    
        req.on('data', function (data) {
            body += data;
        });
        
        req.on('end', function () {
          if (req.url == "/Website/API/Data.json") {
            Statsjs.run(body);
            return;
          }
        });
    }    
	res.render('index');
})

app.listen(port, function() {
	console.log('app running')
})
