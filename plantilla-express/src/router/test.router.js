const { Router } = require('express')
const router = Router()

const testController = require('../controllers/test.controller')

router.get('/', testController.getTest)
router.post('/', testController.postTest)
router.put('/', testController.putTest)
router.delete('/', testController.deleteTest)

module.exports = router