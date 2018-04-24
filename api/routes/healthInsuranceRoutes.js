'use strict';
module.exports = function(app) {
  var patientController = require('../controllers/patientController');

  // todoList Routes
  app.route('/patients')
    .get(patientController.list_all_patients);
  app.route('/patients/search')
    .get(patientController.read_patient_by_name);
  app.route('/patients/prescriptions')
  	.get(patientController.list_prescriptions_for_patient);
  app.route('/physicians')
  	.get(patientController.list_physicians);
  app.route('/medications')
  	.get(patientController.list_medications);
};