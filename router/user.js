/*
 * @Author: Calvin
 * @Date: 2022-01-08 20:22:08
 * @description: 用户模块
 */

const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

const router = express.Router()

// 用户注册
router.post('/register',userValidator.register, userCtrl.register)
router.post('/login', userValidator.login,userCtrl.login)
//获取用户菜单
router.get('/getRoleResourceTree', auth,userCtrl.getRoleResourceTree)



module.exports = router