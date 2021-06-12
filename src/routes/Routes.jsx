import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/Pages/HomePage/HomePage';
import LoginPage from '../components/Pages/LoginPage/LoginPage';
import NotificationPage from '../containers/Notifications/NotificationPage/NotificationPage';

import PatientPage from '../containers/Patients/PatientPage/PatientPage';
import PatientSelected from '../containers/Patients/PatientSelected/PatientSelected';
import NotificationSelectedPatient from '../containers/Notifications/NotificationSelectedPatient/NotificationSelectedPatient';

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
        component={NotificationSelectedPatient}
      />

      <Route exact path="/notifications/patients/:patientID/exams/new" component={ExamForm} />

      <Route
        exact
        path="/notifications/patients/:patientID/monitorings/new"
        component={MonitoringForm}
      />

      <Route
        exact
        path="/notifications/patients/:patientID/treatments/new"
        component={TreatmentForm}
      />

      <Route exact path="/patients" component={PatientPage} />

      <Route exact path="/patients/:patientID" component={PatientSelected} />

      <Route exact path="/patients/new" component={PatientForm} />

      <Route exact path="/patients/:patientID/edit" component={PatientForm} />

      <Route exact path="/users/new" component={UserForm} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
