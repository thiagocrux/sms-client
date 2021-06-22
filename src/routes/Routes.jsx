import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/Pages/HomePage/HomePage';
import LoginPage from '../components/Pages/LoginPage/LoginPage';

import PatientPage from '../containers/Patients/PatientPage/PatientPage';
import PatientForm from '../containers/Patients/PatientForm/PatientForm';
import PatientFullInfo from '../containers/Patients/PatientFullInfo/PatientFullInfo';
import PatientPageForSelectedPatient from '../containers/Patients/PatientPageForSelectedPatient/PatientPageForSelectedPatient';

import NotificationPage from '../containers/Notifications/NotificationPage/NotificationPage';
import NotificationPageForSelectedPatient from '../containers/Notifications/NotificationPageForSelectedPatient/NotificationPageForSelectedPatient';
import MonitoringForm from '../containers/Notifications/NotificationForms/MonitoringForm/MonitoringForm';
import TreatmentForm from '../containers/Notifications/NotificationForms/TreatmentForm/TreatmentForm';
import ExamForm from '../containers/Notifications/NotificationForms/ExamForm/ExamForm';

import UserPage from '../containers/Users/UserPage/UserPage';
import UserForm from '../containers/Users/UserForm/UserForm';
import UserFullInfo from '../containers/Users/UserFullInfo/UserFullInfo';

import PageNotFound from '../components/Pages/PageNotFound/PageNotFound';

function Routes() {
  return (
    <Switch>
      {/* HOME PAGE ROUTES */}

      <Route exact path="/" component={HomePage} />

      {/* LOGIN ROUTES */}

      <Route exact path="/login" component={LoginPage} />

      {/* NOTIFICATION ROUTES */}

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

      {/* PATIENT ROUTES */}

      <Route exact path="/patients" component={PatientPage} />

      <Route exact path="/patients/new" component={PatientForm} />

      <Route
        exact
        path="/patients/:patientID"
        component={PatientPageForSelectedPatient}
      />

      <Route exact path="/patients/:patientID/edit" component={PatientForm} />

      <Route
        exact
        path="/patients/:patientID/info"
        component={PatientFullInfo}
      />

      {/* USER ROUTES */}

      <Route exact path="/users" component={UserPage} />

      <Route exact path="/users/new" component={UserForm} />

      <Route exact path="/users/:userID/edit" component={UserForm} />

      <Route exact path="/users/:userID/info" component={UserFullInfo} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
