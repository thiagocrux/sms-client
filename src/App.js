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
            <Route exact path="/" component={HomePage} />

            <Route exact path="/login" component={LoginPage} />

            <Route exact path="/notification" component={NotificationPage} />

            <Route exact path="/exam" component={ExamForm} />
            <Route path="/exam/:examID" exact component={ExamForm} />

            <Route exact path="/monitoring" component={MonitoringForm} />
            <Route path="/monitoring/:monitoringID" exact component={MonitoringForm} />

            <Route exact path="/patient" component={PatientForm} />
            <Route path="/patient/:patientID" component={PatientForm} />

            <Route exact path="/treatment" component={TreatmentForm} />
            <Route path="/treatment/:treatmentID" component={TreatmentForm} />

            <Route component={PageNotFound} />
          </Switch>
        </Section>
      </PatientsProvider>
    </>
  );
}
