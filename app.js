const express = require('express');
const pageRoute = require('./routes/pageRoute');

const app = express();

//* Temp Engine
app.set('view engine', 'ejs');

//* Middlewares
app.use(express.static('public'));

//* Routes
app.get('/', pageRoute);
app.get('/about', pageRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
}); 
