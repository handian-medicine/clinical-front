const express = require("express")
const router = express.Router()

const login = require('./login')
const home = require('./home')
const password = require('./password')
const mobile = require('./mobile') //

const prj001 = require('./prj001/index')
const prj002 = require('./prj002/index')
const prj003 = require('./prj003/index')
const prj004 = require('./prj004/index')

router.use('/login',login)
router.use('/home',home)
router.use('/password',password)
router.use('/mobile',mobile) //

router.use('/prj001',prj001)
router.use('/prj002',prj002)
router.use('/prj003',prj003)
router.use('/prj004',prj004)

module.exports = router
