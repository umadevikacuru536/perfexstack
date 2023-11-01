const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
sno:{
  type: String,
  require: true,
},
examid:{
  type: String,
  require: true,
},
  category: {
        type: String,
        require: true,
      },
      assessmentname: {
        type: String,
        require: true,
      },
      nooftimes: {
        type: String,
        require: true,
      },
      assessmentpassword: {
        type: String,
        require: true,
      },
      exametype: {
        type: String,
        require: true,
      },
      cutofftype: {
        type: String,
        require: true,
      },
      questionselection: {
        type: String,
        require: true,
      },
      assessmentreport: {
        type: String,
        require: true,
      },
      assessmentflow: {
        type: String,
        require: true,
      },
      assessmentadaptiveness: {
        type: String,
        require: true,
      }
     
   
})

const assessment=mongoose.model("assessment",productSchema);
module.exports = assessment;