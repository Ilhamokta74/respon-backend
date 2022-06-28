const express = require('express');
const router = express.Router();
const gabungan = require('../api/gabungan');


router.get('/pasien/tambah', gabungan.add)
router.get('/pasien/list', gabungan.list)
router.get('/pasien/listLogin', gabungan.listlogin)


module.exports = router