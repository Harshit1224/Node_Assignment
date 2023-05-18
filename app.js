const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require('mongoose'); 
const moment = require("moment");
app.use((req, res, next)=>{
  res.locals.moment = moment;
  next();
  });
const DB_URI = 'mongodb+srv://harshit24srivastava:Harshit-Result@result-application.mqgrbec.mongodb.net/test'
mongoose.set('strictQuery',false);
mongoose.connect(DB_URI).then(()=>{
    console.log('Connected to mongoDB');
}).catch((err)=>{
    console.log('Failed to login please try again'+err);
})



app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

const teachRoutes = require("./routes/teacher.routes")
const studRoutes = require("./routes/student.routes")
app.use("/teacherDashboard", teachRoutes);
app.use("/studentDashboard", studRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});


