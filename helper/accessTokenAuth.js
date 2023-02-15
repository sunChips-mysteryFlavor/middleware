const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

const key = crypto.randomBytes(32);

const iv = crypto.randomBytes(16);

function encrypt(token) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(token);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

module.exports = encrypt;
//DECIPHER

// const crypto = require('crypto');

// const algorithm = 'aes-256-cbc';

// const key = crypto.randomBytes(32);

// const iv = crypto.randomBytes(16);

// function encrypt(text) {
//   let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//   let encrypted = cipher.update(text);
//   encrypted = Buffer.concat([encrypted, cipher.final()]);
//   return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
// }

// var encrypted = encrypt('Hello World!');

// function decrypt(text) {
//   let iv = Buffer.from(text.iv, 'hex');
//   let encryptedText = Buffer.from(text.encryptedData, 'hex');

//   let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);

//   let decrypted = decipher.update(encryptedText);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);

//   return decrypted.toString();
// }

// const decrypted = decrypt(encrypted);
// console.log('Decrypted Text: ' + decrypted);
