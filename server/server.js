const express = require('express')
const cors = require ('cors')
const path=require('path')

const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '79ce65d781d6429f9e933c5bc727d091',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
rollbar.log('Hello world!')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.status(200).sendFile(path.join(__dirname,'../public/index.html'))

})
app.listen(4000, console.log('server running on 4000'))