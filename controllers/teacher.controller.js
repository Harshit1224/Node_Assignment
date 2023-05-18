const Student = require('../models/record');
const teacherGet = (req, res) => {
    res.render("teacherDashboard/Login");
};
const teacherPost = (req, res) => {
    if(req.body.password == "Harshit"){
        res.redirect("/teacherDashboard/option");
    }
    
}
const viewallGet = async (req, res) => {
    const allviewStudents = await Student.find();
    allviewStudents.sort((a,b)=>a.roll-b.roll);
    res.render("teacherDashboard/viewall", {student : allviewStudents})
};
const editGet =async (req, res) => {
    const user = await Student.findById(req.params.id)
    res.render("teacherDashboard/edit", {user : user})
};
const editPost =async (req, res) => {
    const user = await Student.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/teacherDashboard/viewall")
};
const deleteGet =async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect("/teacherDashboard/viewall")
};
const optionGet = (req,res) => {
    res.render("teacherDashboard/option")
};
const addGet = (req, res) => {
    res.render("teacherDashboard/add");
};
const addPost = async (req, res) => {
    const singleStudent = new Student({
        name : req.body.name,  
        roll : req.body.roll,             
        dob : req.body.dateOfBirth,
        score : req.body.score        
    })
    const allviewStudents = await Student.find() 
    try {
        const newStudent = await singleStudent.save();
        if(newStudent == null) throw new Error("Error")
        allviewStudents.push(newStudent);
        allviewStudents.sort((a,b)=>a.roll-b.roll);
        res.render("teacherDashboard/viewall", {student : allviewStudents});
    } catch {res.render("teacherDashboard/viewall", {student : allviewStudents});}
};

module.exports={
    editGet,
    editPost,
    teacherGet,
    deleteGet,
    teacherPost,
    addPost,
    addGet,
    optionGet,
    viewallGet
}