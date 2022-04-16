// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
// const auth = require('./modules/auth')

// const { authenticator } = require('../middleware/auth')  // 掛載 middleware

router.use('/users', users)
router.use('/todos', todos)
// router.use('/auth', auth)
router.use('/', home)

// 匯出路由器
module.exports = router