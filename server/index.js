const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;

app.use(express.static('client/dist'));
// removing line 5 makes 'Hello World!' show up

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

// get and post
app.get('/', (req, res) => {
  res.send('Get request to movie list page');
});
// get should retrive all movie data and return it to the client


app.post('/', (req, res) => {
  res.send('Post request to movie list page');
}); // post should post one new movie to the database