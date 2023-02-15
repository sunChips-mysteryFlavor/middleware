const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const ghAuth = require('./middleware/ghAuth.js');

const products = require('./routes/products.js');
const reviews = require('./routes/reviews.js');
const qa = require('./routes/questionanswers.js');

// const cart = require('./routers/cart');
// const interactions = require('./routers/interactions');
// console.log(products);
const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.json());

app.use(cors());
app.use(morgan('dev'));
app.use(ghAuth.authCheck);
// Routers
app.use('/products', products);
// app.use('/reviews', AUTH_FUNCTION ,reviews);
// app.use('/qa', qa);
// app.use('/cart', cart);
// app.use('/interactions', interactions);

app.listen(3000);
console.log(`Listening at http://localhost:3000`);
