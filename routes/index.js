const Router = require('express')
const router = new Router()
const dogRouter = require('./dog')
const pingRouter = require('./ping')

router.use('/dogs', dogRouter)
router.use('/ping', pingRouter)

module.exports = router