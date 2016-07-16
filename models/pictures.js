var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var PictureShema = new Schema ({
      url: String
});

var Picture = mongoose.model('Picture', PictureShema);

module.exports = Picture;
