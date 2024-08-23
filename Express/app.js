const express = require('express')

const morgan = require('morgan')

const mymiddlewareFunction = require('./middelware/middle.js')
const mymiddlewareFunction2 = require('./middelware/middle2.js')

const app = express()

app.use(express.json())

app.use(mymiddlewareFunction)

app.use(mymiddlewareFunction2)

app.use(morgan('tiny'))

let courses = [
  { id:1, name : 'javascript'},
  { id:2, name : 'java'},
  { id:3, name : 'python'}
]

app.get('/',(req, res) => {
  res.send('hello')
})//read

app.get('/about',(req, res) => {
  res.send('hojayaga')
})

app.get('/conatct',(req, res) => {
  res.send('abacd@abc.com')
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.post('/courses', (req,res) => {
  const course = {
    id : courses.length +1,
    name : req.body.name
  } 
    courses.push(course)
    res.send(course)
})//create

app.put('/courses/:name', (req,res) => {
  let course = courses.find(course => course.name === req.params.name)
  if(!course) res.status(404).send('the course ur looking not here')

  course.name = req.body.name
  res.send(course)
})//update

/*app.delete('/courses/:name', (req,res) => {
  let updatedCourses = courses.filter(course => course.name !== req.params.name)

  courses = updatedCourses

  res.send(courses)
})*/

app.delete('/courses/:id', (req,res) => {
  let course = courses.find(course => course.id === parseInt(req.params.id))
  if(!course) res.status(404).send('the course ur looking not here')

  const index = courses.indexOf(course)

  courses.splice(index , 1)

  res.send(courses)
})//delete



//route parameters

app.get('/courses/:name',(req, res) => {
  let course = courses.find(course => course.name === req.params.name)
  

  if(!course) res.status(404).send('the course ur looking not here')
  res.send(course)
})

const port = process.env.PORT || 3000


app.listen(port , () => console.log(`port is runnig on ${port}`))