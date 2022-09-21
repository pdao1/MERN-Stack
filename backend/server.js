require('dotenv').config()

const express = require('express');
const app = express();

// Routing
// GETs path. request & response object.  
app.get('/',(req, res) => {
  res.json({mssg: 'Hello'})
})

// Port Listener
app.listen(process.env.PORT, () => {
  console.log('listening on port 4000')
})