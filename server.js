const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
	  pageTitle: 'About Page', 
	  currentYear: new Date().getFullYear()
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log('Server is up on port ' + ${port});
});
