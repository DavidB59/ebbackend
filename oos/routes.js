const { Router } = require('express')
const OOS = require('./model')
const router = new Router()
// const auth = require('../auth/middleware')

router.get('/oos', (req, res, next) => {
  OOS
    .findAll()
    .then(oos => {
      res.send({ oos })
    })
    .catch(error => next(error))
})


router.post('/oos', (req, res, next) => {
  OOS
      // .create({name:req.body.name, userId:req.user.id})

    .create(req.body)
    .then(object=> {
      return res.status(201).send(object)
    })
    .catch(error => next(error))
})


module.exports = router 




