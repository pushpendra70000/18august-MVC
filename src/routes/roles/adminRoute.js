//const { Router } = require('express');
const express = require('express');
const { adminController } = require('../../controllers/admin/admincontroller');
const { studentValidator } = require('../../validators/student');
const adminRoute = express.Router();


adminRoute.get('/admin/save_student',studentValidator,adminController);


exports.adminRoute = adminRoute;