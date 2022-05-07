const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = 4000 || process.env.PORT;
const controllers = require('./controllers/index.js');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static('client/dist'));
// line 6 is middleware

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

// get and post
app.get('/movies', (req, res) => {
  console.log(req.body, 'req.body');
  controllers.get((err, movieTitlesData) => {
    if (err) {
      // fix later!
      console.error(err);
    } else {
      //console.log(movieTitlesData, 'app.get movie data back');

      res.json(movieTitlesData);
      //next();
    }
  })
});
// get should retrive all movie data and return it to the client
// get all movietitles from the database
// need controllers.get to take in a callback
// once the data obtained from the server and sent back via callback
// then set status code 200 and send the data back to the client in response and confirmation

app.post('/movies', (req, res) => {
  //console.log(req, 'req');
  //console.log(req.body.title, 'req.body.title'); //batman

  controllers.post(req.body.title, (err, title) => {
    if (err) {
      // fix later!
      console.error(err);
    } else {
      res.json({title: title});
    }
  })

  //res.send('Post request to movie list page');
});

// post should post one new movie to the database
// when someone adds a movie to the page
// we need to send that movie request to the database
// we need controllers.get to take in the movieTitle and a callback
// once the data is posted to the server and we have the data from our callback
// we then need to set status code 200 and send the data back to the client in response and confirmation
// controllers.get();


