const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('conection sussecssful'))
.catch(err => console.error('couldnot connect', err))

//schema

const CourseSchema = new mongoose.Schema({
  name : {type : String, required:true, minlegth:5, maxlength:200},
  tags : {type: Array, validate : {
    validator : function (tags) {
      return tags.length >1
    }
  }},
  category : {type:String, required:true, enum : ['DSA', 'Web']},
  creator : {type :String, required:true},
  publishedDate : {type:Date, default:Date.now},
  isPublished : Boolean ,
  rating : {type: Number, required:function () {return this.isPublished}}
})


const Course = mongoose.model('course', CourseSchema)

async function createCourse() {
  const course = new Course({
    name : 'mango',
    tags : ['express' ,'mangodb'],
    category:'Web',
    creator:'minal',
    isPublished:true,
    rating: 4.5
  })
  
  try {
    const results = await course.save()
    console.log(results)
  }catch(error){
    for(field in error.errors) {
      console.log(error.errors[field])
    }
  }

  //console.log(results)
}
createCourse()
/*
async function getCourses() {
  const courses = await Course.find({creator:'minal'}).select({name:1})
  console.log(courses)
}
getCourses()
*/

