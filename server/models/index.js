// models respond to get and post requests handled by controllers
// by querying the database and/or updating information
// then sending a response back which might be all the data if get
// otherwise might be data of one post if post request?
const database = require('../database');

exports.getMovieListData = function(callback) {
  //console.log('here in getMovieListData');

  database.connection.query(
    //sql request,
    `SELECT * FROM movieTitles;`, (err, results) => {
      if (err) {
        console.log('get request failed');
      } else {
        // console.log('results in getMovieListData', results);
        // console.log(callback, 'callback in getMovieListData');
        // before posting anything results is an empty array
        callback(null, results);
      }
    }
    );
  };

  exports.postMovieData = function(movieTitle, callback) {
    console.log('here in postMovieTitle with title:', movieTitle);

    database.connection.query(
      //sql request,
      'INSERT INTO movieTitles(movieName) VALUE (?);', [movieTitle], (err) => {
        if (err) {
          console.log('post request failed', err);
        } else {
          console.log('posted movieTitle in postMovieData', movieTitle);
          callback(null, movieTitle);
        }
      }
      );
    };
