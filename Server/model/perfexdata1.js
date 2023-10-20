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
  email: {
        type: String,
        require: true,
      },
      secondaryemail: {
        type: String,
        require: true,
      },
      head:{
        type: String,
            require: true,
    },
    userscount:{
        type: String,
            require: true,
    },
    code:{
        type: String,
            require: true,
    },
    primarycontact: {
        type: String,
        require: true,
      },
      secondarycontact: {
        type: String,
        require: true,
      },
      address: {
        type: String,
        require: true,
      },
      city: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        require: true,
      },
})

const perfexdata1=mongoose.model("perfexdata1",productSchema);
module.exports = perfexdata1;