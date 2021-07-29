import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/Pages/HomePage/HomePage';
import LoginPage from '../components/Pages/LoginPage/LoginPage';

import PatientPage from '../containers/Patients/PatientPage/PatientPage';
import PatientForm from '../containers/Patients/PatientForm/PatientForm';
import PatientFullInfo from '../containers/Patients/PatientFullInfo/PatientFullInfo';
import PatientPageForSelectedPatient from '../containers/Patients/PatientPageForSelectedPatient/PatientPageForSelectedPatient';

import MonitoringPage from '../containers/Monitorings/MonitoringPage/MonitoringPage';
import MonitoringPageForSelectedPatient from '../containers/Monitorings/MonitoringPageForSelectedPatient/MonitoringPageForSelectedPatient';
import NotificationForm from '../containers/Monitorings/MonitoringForms/NotificationForm/NotificationForm';
import ObservationForm from '../containers/Monitorings/MonitoringForms/ObservationForm/ObservationForm';
import TreatmentForm from '../containers/Monitorings/MonitoringForms/TreatmentForm/TreatmentForm';
import ExamForm from '../containers/Monitorings/MonitoringForms/ExamForm/ExamForm';

import ReportsPage from '../containers/Reports/ReportsPage/ReportsPage';

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

      <Route exact path="/monitorings" component={MonitoringPage} />

      <Route
        exact
        path="/monitorings/patients/:patientID"
        component={MonitoringPageForSelectedPatient}
      />

      <Route
        exact
        path="/monitorings/patients/:patientID/exams/new"
        component={ExamForm}
      />

      <Route
        exact
        path="/monitorings/patients/:patientID/exams/:examID/edit"
        component={ExamForm}
      />

      <Route
        exact
        path="/monitorings/patients/:patientID/observations/new"
        component={ObservationForm}
      />

      <Route
        exact
        path="/monitorings/patients/:patientID/observations/:observationID/edit"
        component={ObservationForm}
      />

      <Route
        exact
        path="/monitorings/patients/:patientID/notifications/new"
        component={NotificationForm}
      />

      <Route
        exact
        path="/monitorings/patients/:patientID/notifications/:notificationID/edit"
        component={NotificationForm}
      />

      <Route
        exact
        path="/monitorings/patients/:patientID/treatments/new"
        component={TreatmentForm}
      />

      <Route
        exact
        path="/monitorings/patients/:patientID/treatments/:treatmentID/edit"
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

      {/* REPORT ROUTES */}

      <Route exact path="/reports" component={ReportsPage} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
