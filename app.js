const express = require("express")
const app     = express()
const path    = require('path')
const exphbs  = require('express-handlebars')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))

// HANDLE BARS
app.set('view engine', 'handlebars')
const hbs = exphbs.create({defaultLayout: 'main'})
app.engine('handlebars', hbs.engine)
app.set('views', path.join(__dirname, 'views'))

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, function(){
   console.log("O Express está rodando na porta " + PORT)
})

app.get('/', (req, res) => {
   res.render('index')
})