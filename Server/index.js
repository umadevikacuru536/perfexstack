const express = require("express");  // IMPORTING EXPRESS MODULE FROM THIRD PARTY PACKAGE
const mongoose = require("mongoose"); // IMPORTING MONGOOSE
const cors = require("cors"); // IMPORTING CORS
const perfexdata= require("./model/perfexdata")

const app = express()
app.use(express.json())  // ACCEPTING JSON FORMAT DATA AND PARSING TO LOCAL USER
app.use(cors({ origin: "*" }))
//mongo db conncetion WITH NODEJS
mongoose.connect("mongodb+srv://umadevikavuru:umadevi1234@cluster0.drlbwri.mongodb.net/?retryWrites=true&w=majority")
  .then((res) => console.log("db connected"))
  .catch((err) => console.log(err.message))
// main api
app.get("/", (req, res) => {
  res.send("hello")
});
app.post("/signup/", async (req, res) => {

  try {
    const isUserExist = await userData.findOne({ email: req.body.email })
    console.log(isUserExist)
    if (!isUserExist) {
      const newUser = {
        "type": req.body.type,
        "fullname": req.body.fullname,
        "email": req.body.email,
        "mobilenumber": req.body.mobilenumber,
        "password": req.body.password,
        "confirmpassword": req.body.confirmpassword
      };
      const userDetails = await userData.create(newUser)   //  POSTING TO COLLECTION OR MODEL
      console.log(userDetails)

      res.status(200).send("user created successfully")

    } else {

      // if user mail id is founded send below response
      res.status(400).json("user already registered")

    }
  } catch (e) {
    console.log(e.message)
    return res.status(500).json("message: e.message")

  }
});

app.listen(5020, () => {

  console.log("server running")
})


