const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
sno:{
  type: String,
  require: true,
},

 name:{
        type: String,
        require: true,
      },
      description:{
        type: String,
        require: true,
      },
      tag:{
        type: String,
        require: true,
      },
       accesstype:{
        type: String,
        require: true,
      }, 
      accessplan:{
        type: String,
        require: true,
      }, 
      display:{
        type: String,
        require: true,
      },
     
   
})

const categories=mongoose.model("categories",productSchema);
module.exports = categories;