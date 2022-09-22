require('dotenv').config()

const express = require('express');
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
// Routing
// GETs path. request & response object.  
app.get('/',(req, res) => {
  res.json({mssg: 'Hello'})
})

// Port Listener
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})