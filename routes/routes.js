const express = require('express');
const router = express.Router();
const pasien = require('../api/pasien');
const userLogin = require('../api/user-login');
const puskesmas = require('../api/puskesmas')

router.get('/pasien/add', pasien.add)
router.get('/pasien/list', pasien.list)
router.get('/pasien/update', pasien.update)
router.get('/pasien/delete', pasien.hapus)

router.get('/user/add', userLogin.add)
router.get('/user/list', userLogin.list)
router.get('/user/update', userLogin.update)
router.get('/user/delete', userLogin.hapus)

router.get('/puskesmas/add', puskesmas.add)
router.get('/puskesmas/list', puskesmas.list)
router.get('/puskesmas/update', puskesmas.update)
router.get('/puskesmas/delete', puskesmas.hapus)

module.exports = router