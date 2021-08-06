const express = require('express');
const router = express.Router();


router.get('/add/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var sum = (num1 + num2).toString()
    res.json(sum)
  })
  
router.get('/subtract/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var difference = (num1 + num2).toString()
    res.json(difference)
  })

module.exports = router