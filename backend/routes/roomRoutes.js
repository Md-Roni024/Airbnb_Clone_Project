const express = require("express");
const router = express.Router();

// const {createEmployee,getAllEmployee,getEmployeeByID,deleteEmployee, updateEmployee,blockEmployee } = require("../controllers/employee-controller");
// const { employeeRegisterValidation,employeeUpdateValidation } = require("../validation/employeeValidator");
const { createRoom } = require("../controllers/roomController");

router.post("/createRoom",createRoom)
// router.get("/",getAllEmployee)
// router.get("/:id",getEmployeeByID)
// router.put("/:id",employeeUpdateValidation,runValidation, updateEmployee);
// router.delete("/:id",deleteEmployee)
// router.put("/block/:id",blockEmployee)

module.exports = router