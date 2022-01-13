/*
 * @Author: Calvin
 * @Date: 2022-01-08 20:39:11
 * @description: 路由处理逻辑
 */
const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 用户登陆
exports.login = async (req, res, next) => {
  //获取请求体数据
  //数据验证
  //将数据保存数据库
  //发送成功相应

  try {
    let user = await User.findOne({ username: req.body.data.username })
      .select(['username', 'bio', 'image'])
    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret, {
      expiresIn: 60 * 60 * 24
    })
    res.status(200).json({
      isSuccess: true,
      data: {
        user,
        token
      },
      msg: '登录成功'
    })
  } catch (error) {
    next(error)
  }
}

// 用户注册
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user)
    await user.save()
    res.status(200).json({
      isSuccess: true,
      msg: '注册成功！'
    })
  } catch (error) {
    next(error)
  }
}

//获取用户菜单
exports.getRoleResourceTree = async (req, res, next) => {
  try {
    const dataList = [
      {
        "path": "/levelMenu1",
        "children": [
          {
            "path": "indxe"
          }
        ]
      },
      {
        "path": "/levelMenu2",
        "children": [
          {
            "path": "menu1"
          },
          {
            "path": "menu2"
          }
        ]
      },
      {
        "path": "/levelMenu3",
        "children": [
          {
            "path": "menu1"
          },
          {
            "path": "menu2",
            "children": [
              {
                "path": "menu1"
              },
              {
                "path": "menu2"
              }
            ]
          },
          {
            "path": "menu3"
          }
        ]
      }
    ]
    res.status(200).json({
      isSuccess: true,
      data: dataList,
      msg: '获取菜单成功'
    })
  } catch (error) {
    next(error)
  }
}