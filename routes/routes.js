const express = require('express');
const router = express.Router();
const gabungan = require('../api/gabungan');


router.get('/tambah', gabungan.add)
router.get('/list', gabungan.list)
router.get('/listLogin', gabungan.listlogin)


module.exports = router