const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const cardRoutes = require('./routes/card')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses',coursesRoutes)
app.use('/card', cardRoutes)


// app.get('/', (req, res) => {
//     res.render('index', {
//         title: 'Main page',
//         isHome: true
//     })
// })

// app.get('/add', (req, res) => {
//     res.render('add', {
//         title: 'Add course',
//         isAdd: true
//     })
// })

// app.get('/courses', (req, res) => {
//     res.render('courses', {
//         title: 'Courses',
//         isCourses: true
//     })
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})