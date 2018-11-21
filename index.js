const express = require('express')
const bodyParser = require('body-parser')
//const usersRouter = require('./users/routes')
const cors = require('cors')
const oosRouter = require ('./oos/routes')

  
const app = express()
const port = process.env.PORT || 4000

app
  .use(bodyParser.json())
  .use(oosRouter)
 .use(cors())

//  .use(authRouter)
 // .use(usersRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))


  