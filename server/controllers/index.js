// use express to make get and post functions
// which use callback functions or promises to interact with models
// models query the database and send back data to controllers
// controllers then need to send the data to the client
const models = require('../models');

exports.get = function(callback) {
  //console.log('here in get in controllers');

  models.getMovieListData((err, data) => {
    if (err) {
      //handle err - fix!
      console.error(err);
    } else {
      //console.log(data, 'back in controllers');
      // format data into JSON
      callback(null, data);
    }
  });
};

exports.post = function(title, callback) {
  console.log('here in post in controllers with title', title);
  models.postMovieData(title, (err, data) => {
    if (err) {
      //handle err - fix!
      console.error(err);
    } else {
      console.log('added', data, 'to db');
      callback(null, data);
    }
  });
};