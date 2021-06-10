import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../components/Pages/HomePage/HomePage";
import LoginPage from "../containers/LoginPage/LoginPage";
import NotificationPage from "../containers/NotificationPage/NotificationPage";

import PatientList from "../containers/PatientList/PatientList";
import PatientInfo from "../components/PatientInfo/PatientInfo";
import PatientNotification from "../components/Notifications/PatientNotification/PatientNotification";

import MonitoringForm from "../containers/MonitoringForm/MonitoringForm";
import TreatmentForm from "../containers/TreatmentForm/TreatmentForm";
import PatientForm from "../containers/PatientForm/PatientForm";
import ExamForm from "../containers/ExamForm/ExamForm";
import UserForm from "../containers/UserForm/UserForm";

import PageNotFound from "../components/Pages/PageNotFound/PageNotFound";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route exact path="/login" component={LoginPage} />

      <Route exact path="/notifications" component={NotificationPage} />
      <Route
        exact
        path="/notifications/patients/:patientID"
        component={PatientNotification}
      />

      <Route
        exact
        path="/notifications/patients/:patientID/exams/new"
        component={ExamForm}
      />

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

      <Route exact path="/patients" component={PatientList} />

      <Route exact path="/patients/:patientID" component={PatientInfo} />

      <Route exact path="/patients/:patientID/new" component={PatientForm} />

      <Route exact path="/users/:patientID/new" component={UserForm} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
