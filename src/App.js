import { Route, Switch } from 'react-router-dom';

import ExamForm from './containers/ExamForm/ExamForm';
import Header from './components/Layout/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import LoginPage from './containers/LoginPage/LoginPage';
import MonitoringForm from './containers/MonitoringForm/MonitoringForm';
import NotificationPage from './containers/NotificationPage/NotificationPage';
import PatientForm from './containers/PatientForm/PatientForm';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import Section from './components/Layout/Section/Section';
import TreatmentForm from './containers/TreatmentForm/TreatmentForm';

import PatientsProvider from './context/patientsContext';

export default function App() {
  return (
    <>
      <Header />
      <PatientsProvider>
        <Section>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/notification">
              <NotificationPage />
            </Route>
            <Route path="/notification/:patientID">
              <NotificationPage />
            </Route>

            <Route exact path="/exam">
              <ExamForm />
            </Route>
            <Route path="/exam/:examID">
              <ExamForm />
            </Route>

            <Route exact path="/monitoring">
              <MonitoringForm />
            </Route>
            <Route path="/monitoring/:monitoringID">
              <MonitoringForm />
            </Route>

            <Route exact path="/patient">
              <PatientForm />
            </Route>
            <Route path="/patient/:patientID">
              <PatientForm />
            </Route>

            <Route exact path="/treatment">
              <TreatmentForm />
            </Route>
            <Route path="/treatment/:treatmentID">
              <TreatmentForm />
            </Route>

            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Section>
      </PatientsProvider>
    </>
  );
}
