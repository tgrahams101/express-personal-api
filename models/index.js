var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");

module.exports.Picture = require('./pictures.js');
module.exports.Media = require('./media.js');
