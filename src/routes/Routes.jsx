import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/Pages/HomePage/HomePage';
import LoginPage from '../components/Pages/LoginPage/LoginPage';

import PatientPage from '../containers/Patients/PatientPage/PatientPage';
import PatientPageForSelectedPatient from '../containers/Patients/PatientPageForSelectedPatient/PatientPageForSelectedPatient';

import NotificationPage from '../containers/Notifications/NotificationPage/NotificationPage';
import NotificationPageForSelectedPatient from '../containers/Notifications/NotificationPageForSelectedPatient/NotificationPageForSelectedPatient';
import MonitoringForm from '../containers/Notifications/NotificationForms/MonitoringForm/MonitoringForm';
import TreatmentForm from '../containers/Notifications/NotificationForms/TreatmentForm/TreatmentForm';
import ExamForm from '../containers/Notifications/NotificationForms/ExamForm/ExamForm';

import PatientForm from '../containers/Patients/PatientForm/PatientForm';
import UserForm from '../containers/Users/UserForm/UserForm';

import PageNotFound from '../components/Pages/PageNotFound/PageNotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route exact path="/login" component={LoginPage} />

      <Route exact path="/notifications" component={NotificationPage} />

      <Route
        exact
        path="/notifications/patients/:patientID"
        component={NotificationPageForSelectedPatient}
      />

      <Route
        exact
        path="/notifications/patients/:patientID/exams/new"
        component={ExamForm}
      />

      <Route
        exact
        path="/notifications/patients/:patientID/exams/:examID/edit"
        component={ExamForm}
      />

      <Route
        exact
        path="/notifications/patients/:patientID/monitorings/new"
        component={MonitoringForm}
      />

      <Route
        exact
        path="/notifications/patients/:patientID/monitorings/:monitoringID/edit"
        component={MonitoringForm}
      />

      <Route
        exact
        path="/notifications/patients/:patientID/treatments/new"
        component={TreatmentForm}
      />

      <Route
        exact
        path="/notifications/patients/:patientID/treatments/:treatmentID/edit"
        component={TreatmentForm}
      />

      <Route exact path="/patients" component={PatientPage} />

      <Route exact path="/patients/new" component={PatientForm} />

      <Route
        exact
        path="/patients/:patientID"
        component={PatientPageForSelectedPatient}
      />

      <Route exact path="/patients/:patientID/edit" component={PatientForm} />

      <Route exact path="/users/new" component={UserForm} />

      <Route exact path="/users/:userID/edit" component={UserForm} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
