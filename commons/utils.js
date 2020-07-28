const axios = require('axios');

const request = async (url, method, data, authorization = false, token = false) => {
  const response = await axios({
    method: method,
    url: 'http://www.tedarikci.zmdp.cloud/api/api/' + url,
    headers: authorization ? {authorization: token} : null,
    data: data
  });
  return response.data;
};

module.exports = {
  request
}