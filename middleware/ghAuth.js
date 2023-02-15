//https://api.github.com/orgs/hackreactor/teams/students-rfp2212
/*
    Authorization: `test ${authKey}`
*/
/*
    If 200 auth
    else (404) 420 go touch grass
*/

const axios = require('axios');

module.exports.authCheck = (req, res, next) => {
  console.log('auth key', req);
  axios
    .get('https://api.github.com/orgs/hackreactor/teams/students-rfp2212', {
      headers: {
        Authorization: `token ${req.headers.Authorization}`,
      },
    })
    .then((res) => {
      return next();
    })
    .catch((err) => {
      // console.log(errsr);
      var err = new Error('Not authorized! Go back!');
      err.status = 420;
      return next(err);
    });
};

// function isAuth(req, res, next) {
//     const auth = req.headers.authorization;
//     if (auth === 'password') {
//       next();
//     } else {
//       res.status(401);
//       res.send('Access forbidden');
//     }
// }
