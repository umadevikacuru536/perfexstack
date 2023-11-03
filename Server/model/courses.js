const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
sno:{
  type: String,
  require: true,
},
author:{
  type: String,
  require: true,
},
  topic: {
        type: String,
        require: true,
      },
      lastupdate: {
        type: String,
        require: true,
      },
      aboutlearning: {
        type: String,
        require: true,
      },
      subscription: {
        type: String,
        require: true,
      },
      learn: {
        type: String,
        require: true,
      },
      requirement: {
        type: String,
        require: true,
      },
      difficulty:{
        type: String,
        require: true,
      },
      coverletter:{
        type: String,
        require: true,
      }
     
   
})

const courses=mongoose.model("courses",productSchema);
module.exports = courses;