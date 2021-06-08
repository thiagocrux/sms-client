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
            <Route exact path='/'>
              <HomePage />
            </Route>

            <Route exact path='/login'>
              <LoginPage />
            </Route>

            <Route path='/notifications'>
              <NotificationPage />
            </Route>
            <Route path='/notifications/patients/:patientID'>
              <NotificationPage />
            </Route>

            <Route exact path='/exams'>
              <ExamForm />
            </Route>
            <Route path='patients/:patientID/exams/:examID'>
              <ExamForm />
            </Route>

            <Route exact path='/monitorings'>
              <MonitoringForm />
            </Route>
            <Route path='patients/:patientID/monitorings/:monitoringID'>
              <MonitoringForm />
            </Route>

            <Route exact path='patients/:patientID/treatments'>
              <TreatmentForm />
            </Route>
            <Route path='patients/:patientID/treatments/:treatmentID'>
              <TreatmentForm />
            </Route>

            <Route exact path='/patients'>
              <PatientForm />
            </Route>
            <Route path='/patients/:patientID'>
              <PatientForm />
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
