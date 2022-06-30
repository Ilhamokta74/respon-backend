const express = require('express');
const router = express.Router();
const users = require('../api/users');
const userLogin = require('../api/user-login');

router.get('/pasien/add', users.add)
router.get('/pasien/list', users.list)
router.get('/pasien/update', users.update)
router.get('/pasien/delete', users.hapus)

router.get('/user/add', userLogin.add)
router.get('/user/list', userLogin.list)
router.get('/user/update', userLogin.update)
router.get('/user/delete', userLogin.hapus)

module.exports = router