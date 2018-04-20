'use strict';
module.exports = function(app) {
  var patientController = require('../controllers/patientController');

  // todoList Routes
  app.route('/patients')
    .get(patientController.list_all_patients);
  app.route('/patients/name?=:name')
    .get(patientController.read_patient_by_name);
};