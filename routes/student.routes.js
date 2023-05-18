var express = require("express");
const studentController = require('../controllers/student.controller');
const router = express.Router();
router.get('/login',studentController.studentGet);
router.post('/login',studentController.studentPost);
module.exports = router;