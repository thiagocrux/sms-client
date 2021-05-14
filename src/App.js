import { Route, Switch } from 'react-router-dom';

import Exam from './containers/Exam/Exam';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home/Home';
import Monitoring from './containers/Monitoring/Monitoring';
import Notification from './containers/Notification/Notification';
import Patient from './containers/Patient/Patient';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import Section from './components/Layout/Section/Section';
import Treatment from './containers/Treatment/Treatment';

export default function App() {
  return (
    <>
      <Header />
      <Section>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/notification" component={Notification} />

          <Route exact path="/exam" component={Exam} />
          <Route path="/exam/:examID" exact component={Exam} />

          <Route exact path="/monitoring" component={Monitoring} />
          <Route path="/monitoring/:monitoringID" exact component={Monitoring} />

          <Route exact path="/patient" component={Patient} />
          <Route path="/patient/:patientID" component={Patient} />

          <Route exact path="/treatment" component={Treatment} />
          <Route path="/treatment/:treatmentID" component={Treatment} />

          <Route component={PageNotFound} />
        </Switch>
      </Section>
    </>
  );
}
