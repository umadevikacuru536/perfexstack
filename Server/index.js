const express = require("express");  // IMPORTING EXPRESS MODULE FROM THIRD PARTY PACKAGE
const mongoose = require("mongoose"); // IMPORTING MONGOOSE
const cors = require("cors"); // IMPORTING CORS
const perfexdata= require("./model/perfexdata")
const perfexdata1= require("./model/perfexdata1");
const assessment = require("./model/assessment");
const courses = require("./model/courses");
const jwt= require("jsonwebtoken")
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
app.post("/login", async (req, res) => {
  try {
    const { password, email } = req.body;
    let newUser = new perfexdata({
      password: password,
      email: email
    });

    const isUserExist = await perfexdata.findOne({ email: email });

    if (isUserExist) {
      const payload = {
        id: isUserExist._id
      };
      let token = jwt.sign(payload, 'uma', { expiresIn: '24hr' });
      console.log(token);

      return res.status(200).json({ message: "User created successfully", token: token });
    } else {
      await newUser.save(); // Await the user creation before sending a response
      return res.status(200).json({ message: "User already registered" });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal server error" });
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
      InstitutionType,
      Accessplan,
      selectbatchyear,
      selectbatch,
      status,
      expirydate,
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
      InstitutionType:InstitutionType,
      Accessplan:Accessplan,
      selectbatchyear:selectbatchyear,
      selectbatch:selectbatch,
      status:status,
      expirydate:expirydate,
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
app.delete("/admin/:sno", async (req, res) => {
  try {
    const sno = req.params.sno; // Get the sno from the URL parameter
    const deletedUser = await perfexdata1.findOneAndDelete({ sno: sno });

    if (!deletedUser) {
      return res.status(404).json("User not found");
    }

    return res.status(200).json("User deleted successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal server error");
  }
});

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
// app.put('/updateInstitute/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedData = req.body; // Assuming you send updated data in the request body

//     // Use findByIdAndUpdate to update the institute's data
//     const updatedInstitute = await perfexdata1.findByIdAndUpdate(id, updatedData, { new: true });

//     if (updatedInstitute) {
//       return res.status(200).send("Institute updated successfully");
//     } else {
//       return res.status(404).json("Institute not found");
//     }
//   } catch (e) {
//     console.error(e.message);
//     return res.status(500).json(e.message);
//   }
// });

// app.put('/update-data/:email', async (req, res) => {
//   const { email } = req.params;
//   const user =await perfexdata1.findOneAndReplace(email ,req.body);
//   if(!user){
//     res.status(400).json("user not found");
//   }res.status(200).json("users data updated successfully");
// });

app.put('/update-data/:email', async (req, res) => {
  const { email } = req.params;
  const updatedUserData = req.body;

  try {
    // Find the user by email and update their data
    const user = await perfexdata1.findOneAndReplace({ email }, updatedUserData);

    if (!user) {
      return res.status(404).json("User not found");
    }

    return res.status(200).json("User data updated successfully");
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
});
app.get("/alladmin/:email",async(req,res)=>{
try {
  const email = req.params.email; 
  const user = await perfexdata1.findOne({email:email});

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json("user not found");
  }
} catch (e) {
  console.error(e.message);
  return res.status(500).json(e.message);
}
});
app.get("/alladmin/:id", async (req, res) => {
 
  try {
    const id = req.params.id; // Use req.params.id to get the instituteId
    const user = await perfexdata1.findById({id});

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json("user not found");
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json(e.message);
  }
});

app.post('/change-password', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in your MongoDB database based on the email
    const user = await perfexdata1.findOne({ email });

    // Update the user's password
    user.password = password;

    // Save the updated user document
    await user.save();

    res.json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ success: false, message: 'Password change failed' });
  }
});

app.post("/assessment", async (req, res) => {
  try {
    const {
      sno,
      examid,
      category,
      assessmentname,
      nooftimes,
      assessmentpassword,
      exametype,
      cutofftype,
      questionselection,
      assessmentreport,
      assessmentflow,
      assessmentadaptiveness} = req.body;
      let newUser = new assessment({
        sno:sno,
        examid:examid,
        category:category,
        assessmentname:assessmentname,
        nooftimes:nooftimes,
        assessmentpassword:assessmentpassword,
        exametype:exametype,
        cutofftype:cutofftype,
        questionselection:questionselection,
        assessmentreport:assessmentreport,
        assessmentflow:assessmentflow,
        assessmentadaptiveness:assessmentadaptiveness
      });

      // const isUserExist = await assessment.findOne({ '':'' });

      // if (isUserExist) {
      //   return res.status(400).json("User already registered");
      // }
    newUser.save();

     return res.status(200).json("User created successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal server error");
  }
});
app.get("/allassessment", async (req, res) => {

  const allusers1 = await assessment.find({})
  res.status(200).send(allusers1)
});
app.post("/courses", async (req, res) => {
  try {
    const {
      sno,
      author,
      topic,
      lastupdate,
      aboutlearning,
      subscription,
      learn,
      requirement,
      difficulty,
      coverletter} = req.body;
      let newUser = new courses({
        sno:sno,
        author:author,
        topic:topic,
        lastupdate:lastupdate,
        aboutlearning:aboutlearning,
        subscription:subscription,
        learn:learn,
        requirement:requirement,
        difficulty:difficulty,
        coverletter:coverletter
      });

      // const isUserExist = await assessment.findOne({ '':'' });

      // if (isUserExist) {
      //   return res.status(400).json("User already registered");
      // }
    newUser.save();

     return res.status(200).json("User created successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal server error");
  }
});
app.get("/allcourses", async (req, res) => {

  const allusers1 = await courses.find({})
  res.status(200).send(allusers1)
});
app.listen(5020, () => {

  console.log("server running")
})