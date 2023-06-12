const Router = require('express')
const router = new Router()
const dogController = require('../controllers/dogController')

router.post('/', dogController.create)
router.get('/', dogController.getAll)

module.exports = router