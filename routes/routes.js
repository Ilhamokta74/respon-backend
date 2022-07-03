const express = require('express');
const router = express.Router();
const pasien = require('../api/pasien');
const staff = require('../api/staff');
const puskesmas = require('../api/puskesmas')
const admin = require('../api/admin')

// PASIEN
router.post('/pasien/add', pasien.add)
router.get('/pasien/list', pasien.list)
router.put('/pasien/update', pasien.update)
router.delete('/pasien/delete', pasien.hapus)

// STAFF
router.post('/staff/add', staff.add)
router.get('/staff/list', staff.list)
router.put('/staff/update', staff.update)
router.delete('/staff/delete', staff.hapus)

// PUSKESMAS
router.post('/puskesmas/add', puskesmas.add)
router.get('/puskesmas/list', puskesmas.list)
router.put('/puskesmas/update', puskesmas.update)
router.delete('/puskesmas/delete', puskesmas.hapus)

// ADMIN
router.post('/admin/add', admin.add)
router.get('/admin/list', admin.list)
router.put('/admin/update', admin.update)
router.delete('/admin/delete', admin.hapus)

module.exports = router