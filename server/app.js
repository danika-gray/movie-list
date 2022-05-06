const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
const controllers = require('./controllers');

// app.use(express.static('client/dist'));
// removing line 5 makes 'Hello World!' show up

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

// get and post
app.get('/', (req, res) => {
  controllers.get((err, movieTitles) => {
    if (err) {
      // fix later!
      console.error(err);
    } else {
      res.statusCode(200).json({data});
    }
  })

  // get all movietitles from the database
  // need controllers.get to take in a callback
  // once the data obtained from the server and sent back via callback
    // then set status code 200 and send the data back to the client in response and confirmation

  res.send('Get request to movieList');

});
// get should retrive all movie data and return it to the client

app.post('/', (req, res) => {
  console.log(req, 'req');
  // when someone adds a movie to the page
  // we need to send that movie request to the database
  // we need controllers.get to take in the movieTitle and a callback
  // once the data is posted to the server and we have the data from our callback
    // we then need to set status code 200 and send the data back to the client in response and confirmation
  // controllers.get();

  controllers.post(req.body /* ? */, (err, movieTitles) => {
    if (err) {
      // fix later!
      console.error(err);
    } else {
      res.statusCode(201).json({data});
    }
  })

  res.send('Post request to movie list page');
}); // post should post one new movie to the database

