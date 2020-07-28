const express = require('express');
const router = new express.Router();
const {request} = require('../commons/utils');

router.get('/', async (req, res) => {
  const response = await request('authorized/material/getAll', 'GET', {}, true, req.headers.authorization);
  if (!response.type) {
    return res.json(
      response
    );
  }
  // gelen datanın alan isimleri değiştirildi. bazıları datadan çıkarıldı
  const materials = [];
  response.data.forEach(element => {
    const object ={
      _id: element._id,
      name: element.name,
      code: element.material_code,
      group_name: element.group_name,
    }
    materials.push(object);
  });
  return res.json({
    type: true,
    data: materials
  })
});

router.post('/', async (req,res) => {
  const response = await request('authorized/material/create', 'POST', req.body, true, req.headers.authorization);
  return res.json(
    response
  )
});

module.exports = router;