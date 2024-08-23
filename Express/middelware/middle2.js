function mymiddle2(req,res, next){
  console.log('second middlware')
  next()
}

module.exports = mymiddle2