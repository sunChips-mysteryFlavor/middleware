// import axios from 'axios';

const axios = require('axios');

module.exports = {
  getAll: (url, extension) =>
    axios({
      method: 'get',
      url: url + extension,
      headers: headers,
    }),
  create: (url, extension, param) =>
    axios({
      method: 'post',
      url: url + extension,
      headers: headers,
      data: param,
    }),
  update: (url, extension) =>
    axios({
      method: 'put',
      url: url + extension,
      headers: headers,
    }),
};
