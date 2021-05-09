import { Route, Switch } from 'react-router-dom';

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
          <Route path="/monitoramento" component={Monitoring} />
          {/* <Route path="/monitoramento/:id" exact component={Monitoring} /> */}
          <Route path="/paciente" component={Patient} />
          {/* <Route path="/paciente/:id" component={Patient} /> */}
          <Route path="/tratamento" component={Treatment} />
          {/* <Route path="/tratamento/:id" component={Treatment} /> */}
          <Route component={RouteNotFound} />
        </Switch>
      </Section>
    </>
  );
}
