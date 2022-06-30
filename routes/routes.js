const express = require('express');
const router = express.Router();
const users = require('../api/users');
const userLogin = require('../api/user-login');

<<<<<<< HEAD
router.get('/pasien/add', users.add)
router.get('/pasien/list', users.list)
router.get('/pasien/update', users.update)
router.get('/pasien/delete', users.hapus)

router.get('/user/add', userLogin.add)
router.get('/user/list', userLogin.list)
router.get('/user/update', userLogin.update)
router.get('/user/delete', userLogin.hapus)
=======
router.get('/pasien/tambah', gabungan.add)
router.get('/pasien/list', gabungan.list)
router.get('/pasien/listLogin', gabungan.listlogin)
router.get('/pasien/daftar', gabungan.daftar)
router.get('/pasien/login', gabungan.login)
router.get('/pasien/hapus', gabungan.hapus)

>>>>>>> 8aebd91a3d2a29b48ca5c0928104041dfbe809d0

module.exports = router