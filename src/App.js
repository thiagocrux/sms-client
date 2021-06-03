import { Route, Switch } from 'react-router-dom';

import Exam from './containers/Exam/Exam';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './containers/Login/Login';
import Monitoring from './containers/Monitoring/Monitoring';
import Notification from './containers/Notification/Notification';
import Patient from './containers/Patient/Patient';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import Section from './components/Layout/Section/Section';
import Treatment from './containers/Treatment/Treatment';

import PatientsProvider from './context/patientsContext';

export default function App() {
  return (
    <>
      <Header />
      <PatientsProvider>
        <Section>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/login'>
              <Login />
            </Route>

            <Route exact path='/notification'>
              <Notification />
            </Route>
            <Route exact path='/notification/:patientId'>
              <Notification />
            </Route>

            <Route exact path='/exam'>
              <Exam />
            </Route>
            <Route exact path='/exam/:examID'>
              <Exam />
            </Route>

            <Route exact path='/monitoring'>
              <Monitoring />
            </Route>
            <Route exact path='/monitoring/:monitoringID'>
              <Monitoring />
            </Route>

            <Route exact path='/patient'>
              <Patient />
            </Route>
            <Route exact path='/patient/:patientID'>
              <Patient />
            </Route>

            <Route exact path='/treatment'>
              <Treatment />
            </Route>
            <Route exact path='/treatment/:treatmentID'>
              <Treatment />
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
