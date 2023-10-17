const express = require("express");  // IMPORTING EXPRESS MODULE FROM THIRD PARTY PACKAGE
const mongoose = require("mongoose"); // IMPORTING MONGOOSE
const cors = require("cors"); // IMPORTING CORS
const perfexdata= require("./model/perfexdata")
const perfexdata1= require("./model/perfexdata1")
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
    const {
      password,
      email} = req.body;
      let newUser = new perfexdata({
        password:password,
        email:email
      });

      const isUserExist = await perfexdata.findOne({ email: email });

      if (isUserExist) {
        return res.status(400).json("User already registered");
      }
    newUser.save();

     return res.status(200).json("User created successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal server error");
  }
});

app.post("/admin", async (req, res) => {
  try {
    const {
      sno,
      name,
      email,
      head,
      userscount,
      code} = req.body;
      let newUser = new perfexdata1({
        sno:sno,
      name:name,
      email:email,
      head:head,
      userscount:userscount,
      code:code
      });

      const isUserExist = await perfexdata1.findOne({ email: email });

      if (isUserExist) {
        return res.status(400).json("User already registered");
      }
    newUser.save();

     return res.status(200).json("User created successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal server error");
  }
});
app.get("/alladmin", async (req, res) => {

  const allusers1 = await perfexdata1.find({})
  res.status(200).send(allusers1)
});
app.listen(5020, () => {

  console.log("server running")
})


