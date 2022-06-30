const express = require('express');
const router = express.Router();
const gabungan = require('../api/gabungan');

router.get('/pasien/tambah', gabungan.add)
router.get('/pasien/list', gabungan.list)
router.get('/pasien/listLogin', gabungan.listlogin)
router.get('/pasien/daftar', gabungan.daftar)
router.get('/pasien/login', gabungan.login)
router.get('/pasien/hapus', gabungan.hapus)


module.exports = router