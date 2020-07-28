const express = require('express');
const router = new express.Router();
const {request} = require('../commons/utils');

router.get('/', async (req,res) => {
  const data = await request('authorized/report/getall', 'GET', {}, true, req.headers.authorization);
  if(!data.type){
    return res.json(
      data
    );
  }
  const response = {
    cargo: data.data.cargo
  }
  return res.json({
    type: true,
    data: response
  })
});

module.exports = router;