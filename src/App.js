import { Route, Switch } from 'react-router-dom';

import Exam from './containers/Exam/Exam';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Monitoring from './containers/Monitoring/Monitoring';
import Patient from './containers/Patient/Patient';
import RouteNotFound from './components/RouteNotFound/RouteNotFound';
import Section from './components/Section/Section';
import Treatment from './containers/Treatment/Treatment';

export default function App() {
  return (
    <>
      <Header />
      <Section>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/exame" component={Exam} />
          <Route path="/exame/:examID" exact component={Exam} />

          <Route exact path="/monitoramento" component={Monitoring} />
          <Route path="/monitoramento/:monitoringID" exact component={Monitoring} />

          <Route exact path="/paciente" component={Patient} />
          <Route path="/paciente/:patientID" component={Patient} />

          <Route exact path="/tratamento" component={Treatment} />
          <Route path="/tratamento/:treatmentID" component={Treatment} />

          <Route component={RouteNotFound} />
        </Switch>
      </Section>
    </>
  );
}
