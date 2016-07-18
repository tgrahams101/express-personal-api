var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var MediaShema = new Schema ({
      title: String,
      type: String,
      picUrl: String
});

var Media = mongoose.model('Media', MediaShema);

module.exports = Media;
