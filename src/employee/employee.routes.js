const router = require('express').Router();
const empCtrl = require('./employee.controller');

router.get('/', empCtrl.getAllEmployees);
router.post('/', empCtrl.createEmployee);
router.get('/:id', empCtrl.getEmployee);
router.put('/:id', empCtrl.editEmployee);
router.delete('/:id', empCtrl.deleteEmployee);

module.exports = router;