const Student = require('../models/record');
const studentGet = (req, res) => {
       res.render("studentDashboard/login",{
        error : null
       });
    };

const studentPost = async (req, res) => {
try{
        const Studentroll = req.body.roll;   
        const StudentDob = req.body.dateOfBirth;
        const individualStudent = await Student.findOne({roll : Studentroll , dateOfBirth : StudentDob});  
        if(individualStudent==null) {
          throw new Error("Error")
        }  
        res.render("studentDashboard/view", { one : individualStudent});}catch(error){
          res.render("studentDashboard/login", {error : "Please Enter correct roll number"
          })
        }
    }
  
module.exports={
    studentGet,
    studentPost
}