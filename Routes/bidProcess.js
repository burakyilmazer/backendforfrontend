const express = require('express');
const router = new express.Router();
const {request} = require('../commons/utils');

router.get('/', async (req, res) => {
  const response = await request('authorized/bid/process/getAll', 'POST', {}, true, req.headers.authorization);
  if (!response.type) {
    return res.json(
      response
    );
  }

  let datas = [];

  response.data.map(item => {
    const object = {
      desc: item.description,
      title: item.title,
      status: item.bid_status,
      suppliers: item.suppliers,
    }
    datas.push(object);
  });

  return res.json({
    type: true,
    data: datas
  })
});

module.exports = router;