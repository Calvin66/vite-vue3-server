/*
 * @Author: Calvin
 * @Date: 2022-01-08 20:39:11
 * @description: 错误处理中间件
 */

const util = require('util')

module.exports = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      error: util.format(err)
    })
  }
}
