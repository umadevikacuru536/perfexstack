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
      secondaryemail,
      userscount,
      primarycontact,
      secondarycontact,
      address,
      city,
      password,
      code} = req.body;
      let newUser = new perfexdata1({
        sno:sno,
      name:name,
      email:email,
      head:head,
      secondaryemail:secondaryemail,
      userscount:userscount,
      primarycontact:primarycontact,
      secondarycontact:secondarycontact,
      address:address,
      city:city,
      password:password,
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
app.post("/eyeicon", async (req, res) => {
  try {
    const {
      sno,
      name,
      userscount,
      head,
      primarycontact,
      code,
      email} = req.body;

      const isUserExist = await perfexdata1.findOne({ email: email });

      if (isUserExist) {
        return res.status(400).json("User already registered");
      }
    let newUser = new perf({
      sno:sno,
      name:name,
      userscount:userscount,
      head:head,
      primarycontact:primarycontact,
      code:code,
      email:email
    });


    await newUser.save();

    res.status(200).json("User created successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal server error");
  }
});
// app.delete("/admin/:sno", async (req, res) => {
//   try {
//     const sno = req.params.sno; // Get the sno from the URL parameter
//     const deletedUser = await perfexdata1.findOneAndDelete({ sno: sno });

//     if (!deletedUser) {
//       return res.status(404).json("User not found");
//     }

//     return res.status(200).json("User deleted successfully");
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json("Internal server error");
//   }
// });

app.delete("/deleteInstitute/:id", async (req, res) => {
  try {
    const id = req.params.id; // Use req.params.id to get the instituteId
    const deletedInstitute = await perfexdata1.findByIdAndRemove(id);

    if (deletedInstitute) {
      return res.status(200).json("Institute deleted successfully");
    } else {
      return res.status(404).json("Institute not found");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});
app.get("/alladmin", async (req, res) => {

  const allusers1 = await perfexdata1.find({})
  res.status(200).send(allusers1)
});
app.put('/updateInstitute/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body; // Assuming you send updated data in the request body

    // Use findByIdAndUpdate to update the institute's data
    const updatedInstitute = await perfexdata1.findByIdAndUpdate(id, updatedData, { new: true });

    if (updatedInstitute) {
      return res.status(200).send("Institute updated successfully");
    } else {
      return res.status(404).json("Institute not found");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});


app.listen(5020, () => {

  console.log("server running")
})


