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
Tag: {
        type: String,
        require: true,
      },
Chapters: {
        type: String,
        require: true,
      },
      totalqustions: {
        type: String,
        require: true,
      },
      Description:{
        type: String,
        require: true,
      }
   
})

const Subject=mongoose.model("Subject",productSchema);
module.exports = Subject;