var express = require('express');
var router = express.Router();

var admin = require('../controller/adminController');

router.post('/',admin.a_login)
router.post('/register',admin.a_register)
router.get('/view_user',admin.view_user)
router.get('/single_user/:id',admin.single_user)
router.post('/update_user/:id',admin.update_user)
router.post('/manage_user/:id',admin.manage_user)
router.post('/add_task',admin.add_task)
router.get('/view_task',admin.view_task)
router.get('/view_single_task/:id',admin.view_single_task)
router.get('/delete_task/:id',admin.delete_task)
router.post('/update_task/:id',admin.update_task)
router.post('/manage_task/:id',admin.manage_task)

module.exports = router;
