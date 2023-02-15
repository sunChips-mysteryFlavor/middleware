// import axios from 'axios';

const axios = require('axios');

module.exports = {
  global: (url, req) => {
    const axiosObj = {
      method: req.method,
      baseURL: url,
      url: req.path,
      query: req.query,
      headers: { Authorization: req.encryptedKey },
      data: req.body,
    };
    console.log(axiosObj);
    return axios(axiosObj);
  },
  // getAll: (url, extension) =>
  //   axios({
  //     method: 'get',
  //     url: url + extension,
  //     headers: headers,
  //   }),
  // create: (url, extension, param) =>
  //   axios({
  //     method: 'post',
  //     url: url + extension,
  //     headers: headers,
  //     data: param,
  //   }),
  // update: (url, extension) =>
  //   axios({
  //     method: 'put',
  //     url: url + extension,
  //     headers: headers,
  //   }),
};
