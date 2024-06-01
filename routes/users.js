var express = require('express');
var router = express.Router();

var user = require('../controller/userController')

router.post('/',user.u_login)
router.post('/register',user.u_register)
router.get('/task',user.u_tasks)

module.exports = router;