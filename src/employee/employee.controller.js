const Employee = require('./employee.model');

var getAllEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

var createEmployee = async (req, res, next) => {
    const newEmp = new Employee(req.body);
    await newEmp.save();
    res.json({
        status: 'employee created.'
    });
};

var getEmployee = async (req, res, next) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

var editEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, { new: true });
    res.json({
        status: 'employee updated.'
    });
};

var deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'employee deleted.'});
};

const employeeController = {
    getAllEmployees: getAllEmployees,
    createEmployee: createEmployee,
    getEmployee: getEmployee,
    editEmployee: editEmployee,
    deleteEmployee: deleteEmployee
}

module.exports = employeeController;