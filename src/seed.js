const mongoose = require('mongoose');
const Employee = require('./employee/employee.model');

mongoose.connect(require('./dbconfig').AtlasConString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

var emp = {
    name: 'Mario Contreras',
    position: 'Senior FullStack Dev',
    office: '203',
    salary: 20000
};

Employee.findOneAndRemove({'name': 'Mario Contreras'}, function(err, res){
    if(err) throw err;
    exit();
});

var newEmp = new Employee(emp);
newEmp.save(function(err, emp){
    if(err) throw err;
    console.log("¡Employee created successfully!");
    console.log("Name: " + emp.name);
    exit();
});



function exit(){
    mongoose.disconnect();
}