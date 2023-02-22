const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config()
const ghAuth = require('./middleware/ghAuth.js');
const accessToken = require('./middleware/accessTokenAuth.js');

const products = require('./routes/products.js');
const reviews = require('./routes/reviews.js');
const qa = require('./routes/questionanswers.js');
// const cart = require('./routers/cart');
// const interactions = require('./routers/interactions');

const app = express();

app.use(express.json());

app.use(cors());
app.use(morgan('dev'));

//Github Authorization
app.use(ghAuth);
app.use(accessToken);

// Routers
app.use('/products' ,products);
app.use('/reviews' ,reviews);
app.use('/qa', qa);
// app.use('/cart', cart);
// app.use('/interactions', interactions);

app.listen(process.env.SERVER_PORT);
console.log(`Listening at port ${process.env.SERVER_PORT}`);
