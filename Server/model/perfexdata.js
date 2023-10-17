const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({

  email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      }
   
})

const perfexdata=mongoose.model("perfexdata",productSchema);
module.exports = perfexdata;