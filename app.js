/*
 * @Author: Calvin
 * @Date: 2022-01-08 17:37:47
 * @description: 
 */
const express = require('express')
//日志输出
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
require('./model') //连接数据库
const errorHandler = require('./middleware/error-handler')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000
// 挂载路由
app.use('/api', router)

// 挂载统一处理服务端错误中间件
app.use(errorHandler())

app.listen(PORT,()=>{
  console.log(`Sever is running at http://localhost:${PORT}`);
})