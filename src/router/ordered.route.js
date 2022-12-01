const express = require('express')
const router = express.Router()
const controller = require('../controller/ordered.controller')

router.post('/', controller.create)
router.delete('/:id', controller.remove)

module.exports = router