/*
 * @Author: Calvin
 * @Date: 2022-01-12 21:44:23
 * @description: 
 */

const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)