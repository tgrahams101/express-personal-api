var express = require(express);
var Schema =  mongoose.Shema;

var PictureShema = new Schema ({
      url: String
});

var Picture = mongoose.model('Picture', PictureShema);

module.exports = Picture;
