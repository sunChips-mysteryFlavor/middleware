// import axios from 'axios';

const axios = require('axios');

module.exports = {
  getAll: (url, extension, auth) =>
    axios({
      method: 'get',
      url: url + extension,
      headers: {Authorization : auth},
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


  global: (url,req) => {
    const query = Object
      .keys(req.query)
      .map((prop) => `${req.query}=${req.query[prop]}&`)
      .join('')

    let axiosObj ={
      method: req.method,
      url: url + req.path + query,
      headers: {Authorization : req.encryptedKey},
      data: req.body,
    }
    return axios(axiosObj)
  }
};
