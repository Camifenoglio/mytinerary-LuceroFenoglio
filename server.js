require('dotenv').config()
require('./config/database')
const passport = require('passport')

const express = require ('express')
const Router = require ('./routes/routes')
const cors = require ('cors')
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)

const PORT = 4000

app.set ('port', PORT)

app.get ('/', (req, res) => {
    res.send('SERVIDOR CREADO!')
})

app.listen(PORT, () => {
    console.log('SERVIDOR CORRIENDO EN PUERTO: ' + app.get ('port'))
})