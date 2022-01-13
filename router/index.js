/*
 * @Author: Calvin
 * @Date: 2022-01-08 17:51:33
 * @description: 
 */
const express = require('express')

const router = express.Router()
// 用户相关路由
router.use('/user', require('./user'))

module.exports = router