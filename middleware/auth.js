/*
 * @Author: Calvin
 * @Date: 2022-01-13 00:32:27
 * @description: token校验
 */

const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
  // 从请求头获取 token 数据
  let token = req.headers['authorization']
  if (!token) {
    return res.status(401).json({
      code:"AUTH_401",
      isSuccess:false,
      msg: '登录过期，请重新登录'
    }).end()
  }

  try {
    const decodedToken = await verify(token, jwtSecret)
    req.user = await User.findById(decodedToken.userId)
    next()
  } catch (err) {
    return res.status(401).json({
      code:"AUTH_401",
      isSuccess:false,
      msg: '登录过期，请重新登录'
    }).end()
  }

  // 验证 token 是否有效
  // 无效 -> 响应 401 状态码
  // 有效 -> 把用户信息读取出来挂载到 req 请求对象上
  //        继续往后执行
}
