// require express and other modules
var express = require('express'),
    app = express(),
    db = require('./models/index.js');

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

var books = {name: 1984, year: 1958, author: "George Orwell"};

var profile = {
  name: "Ted Anyansi",
  hometown: "Union, NJ",
  curentresidence: "San Francisco, CA",
  githublink: "https://github.com/tgrahams101"



};

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/books', function (req, res){
    res.json(books);
});

app.get ('/profile', function (req, res){
    res.json(profile);
});

app.post ('/pics', function (req, res) {
    var newPicture = new db.Picture({
          url: req.body.url
        });
      newPicture.save(function (err, success){
         if (err){
           res.sendStatus(500);
         }
        res.json(success);
      });
});

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Hey, I'm Ted. And this is my API. Enjoy!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "https://arcane-springs-81922.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
      {method: "POST", path: "/api/pics", description: "Cool pics!"}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
