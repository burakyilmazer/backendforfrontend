const express = require('express');
const router = new express.Router();
const {request} = require('../commons/utils');

router.get('/', async (req, res) => {
  const data = await request('authorized/detail/getAll', 'GET', {}, true, req.headers.authorization);
  if (!data.type) {
    return res.json(
      data
    );
  }
  const response = {
    _id: data.data._id, 
    img: data.data.img, 
    description: data.data.description, 
    name: data.data.name, 
  }
  return res.json({
    type: true,
    data: response
  })
});

module.exports = router;