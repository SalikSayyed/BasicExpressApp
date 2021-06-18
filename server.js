if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//referencing index router
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
//all views will be here
app.set('layout', 'layouts/layout')
//just like templating in django
app.use(expressLayouts)
app.use(express.static('public'))
//where are static files inside public folder


//! Using Mongoose as database i.e, MongoDB

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Mongoose'))

//now to get the address of DB we need to set Enviornment varialbes..



app.use('/', indexRouter)


//!making listen
app.listen(process.env.PORT || 3000)

//Using MVC archetecture.. routes folder is same as Controller








