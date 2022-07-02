const express = require('express');
const router = express.Router();
const pasien = require('../api/pasien');
const staff = require('../api/staff');
const puskesmas = require('../api/puskesmas')
const admin = require('../api/admin')

router.get('/pasien/add', pasien.add)
router.get('/pasien/list', pasien.list)
router.get('/pasien/update', pasien.update)
router.get('/pasien/delete', pasien.hapus)

router.get('/staff/add', staff.add)
router.get('/staff/list', staff.list)
router.get('/staff/update', staff.update)
router.get('/staff/delete', staff.hapus)

router.get('/puskesmas/add', puskesmas.add)
router.get('/puskesmas/list', puskesmas.list)
router.get('/puskesmas/update', puskesmas.update)
router.get('/puskesmas/delete', puskesmas.hapus)

router.get('/admin/add', admin.add)
router.get('/admin/list', admin.list)
router.get('/admin/update', admin.update)
router.get('/admin/delete', admin.hapus)

module.exports = router