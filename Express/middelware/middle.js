function mymiddleware(req,res ,next){
  console.log('i am middleware')
  next()
}

module.exports = mymiddleware