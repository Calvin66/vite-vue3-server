/*
 * @Author: Calvin
 * @Date: 2022-01-08 23:03:36
 * @description: 校验参数格式
 */

const { body } = require("express-validator");
const validate = require("../middleware/validate");
const { User } = require("../model");

exports.register = [
  validate([
    body("data.username")
      .notEmpty()
      .withMessage("用户名不能为空"),
    body("data.password")
      .notEmpty()
      .withMessage("密码不能为空"),
  ]),
  validate([
    body("data.username").custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) {
        return Promise.reject("用户名已存在");
      }
    }),
  ]),
];

exports.login = [
  validate([
    body("data.username")
      .notEmpty()
      .withMessage("用户名不能为空"),
    body("data.password")
      .notEmpty()
      .withMessage("密码不能为空"),
  ]),
  validate([
    body("data.username").custom(async (username) => {
      const user = await User.findOne({ username });
      if (!user) {
        return Promise.reject("用户名不存在");
      }
    }),
  ]),
  validate([
    body('data.username').custom(async (username,{ req }) => {
      const user = await User.findOne({ username });
      if (req.body.data.password!== user.password) {
        return Promise.reject('密码错误')
      }
    })
  ])
]
