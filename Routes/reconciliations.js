const express = require('express');
const router = new express.Router();
const {request} = require('../commons/utils');

router.get('/', async (req,res) => {
  const data = await request('authorized/confirmation/getAll', 'GET', {}, true, req.headers.authorization);
  if(!data.type){
    return res.json(
      data
    );
  }
  
  const expectant = data.data.filter((e) => e.status === 0);
  const accepted = data.data.filter((e) => e.status === 1);
  const rejected = data.data.filter((e) => e.status === 2);

  const response = {
    expectant: expectant,
    accepted: accepted,
    rejected: rejected
  }
  return res.json({
    type: true,
    data: response
  })
});

module.exports = router;