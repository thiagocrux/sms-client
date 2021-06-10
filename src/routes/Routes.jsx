import React from "react";
import { Route, Switch } from "react-router-dom";

import ExamForm from "../containers/ExamForm/ExamForm";
import HomePage from "../components/Pages/HomePage/HomePage";
import LoginPage from "../containers/LoginPage/LoginPage";
import MonitoringForm from "../containers/MonitoringForm/MonitoringForm";
import NotificationPage from "../containers/NotificationPage/NotificationPage";
import PatientForm from "../containers/PatientForm/PatientForm";
import PageNotFound from "../components/Pages/PageNotFound/PageNotFound";
import TreatmentForm from "../containers/TreatmentForm/TreatmentForm";
import UserForm from "../containers/UserForm/UserForm";
import PatientPage from "../containers/PatientPage/PatientPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route exact path="/login" component={LoginPage} />

      <Route exact path="/notifications" component={NotificationPage} />
      <Route
        exact
        path="/notifications/patients/:patientID"
        component={NotificationPage}
      />

      <Route
        path="/notifications/patients/:patientID/exams/new"
        component={ExamForm}
      />

      <Route
        path="/notifications/patients/:patientID/monitorings/new"
        component={MonitoringForm}
      />

      <Route
        path="/notifications/patients/:patientID/treatments/new"
        component={TreatmentForm}
      />

      <Route path="/patients" component={PatientPage} />

      <Route path="/patients/:patientID" component={PatientPage} />

      <Route path="/patients/:patientID/new" component={PatientForm} />

      <Route path="/users/:patientID/new" component={UserForm} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
