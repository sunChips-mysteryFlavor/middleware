// import axios from 'axios';

const axios = require('axios');

module.exports = {
  global: (url, req) => {
    const axiosObj = {
      method: req.method,
      baseURL: url,
      url: req.path,
      params: req.params,
      headers: {
        authorization:
          req.encryptedKey.iv.toString('base64') +
          '|' +
          req.encryptedKey.encryptedData,
      },
      data: req.body,
    };
    console.log(axiosObj);
    return axios(axiosObj);
  },
};
