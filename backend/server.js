require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(express.json())
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


//connect db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen 
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
      console.log(error)
  })

