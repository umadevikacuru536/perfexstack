const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
instion:{
  type: String,
  require: true,
},
category:{
  type: String,
  require: true,
}, 
assessment: {
        type: String,
        require: true,
      },
batchyear: {
        type: String,
        require: true,
      },
      batch: {
        type: String,
        require: true,
      }
     
   
})

const practice=mongoose.model("practice",productSchema);
module.exports = practice;