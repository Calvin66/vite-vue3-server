/*
 * @Author: Calvin
 * @Date: 2022-01-08 21:15:55
 * @description: 
 */

const mongoose = require('mongoose')
const baseModel = require('./base-model.js')

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  }
})

module.exports = userSchema
