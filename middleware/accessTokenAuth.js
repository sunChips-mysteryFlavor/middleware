const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

const key = 'rrMbJsGJ4Pxxs0SVn8lfFzzeIhp8LQEJ';

const iv = crypto.randomBytes(16);

//Encrypt
module.exports = (req, res, next) => {
  let cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(req.headers.authorization, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  req.encryptedKey = {
    iv: iv,
    encryptedData: encrypted,
  };

  next();
};

//DECIPHER
// //----
// const crypto = require('crypto');

// const algorithm = 'aes-256-cbc';

// const key ='rrMbJsGJ4Pxxs0SVn8lfFzzeIhp8LQEJ';
// //----

// function decrypt(text) {

//   let decipher = crypto.createDecipheriv(algorithm, key, text.iv);

//   let decrypted = decipher.update(text.encryptedData, 'hex', 'utf8');
//   decrypted += decipher.final('utf8');

//   return decrypted;
// }
