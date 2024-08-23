const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('conection sussecssful'))
.catch(err => console.error('couldnot connect', err))

//schema

const CourseSchema = new mongoose.Schema({
  name : String,
  creator : String,
  publishedDate : {type:Date, default:Date.now},
  isPublished : Boolean 
})


const Course = mongoose.model('course', CourseSchema)

async function createCourse() {
  const course = new Course({
    name : 'Java',
    creator :'abd',
    isPublished : false
  })

  const results = await course.save()
  //console.log(results)
}
createCourse()

async function getCourses() {
  const courses = await Course.find({creator:'minal'}).select({name:1})
  console.log(courses)
}
getCourses()

