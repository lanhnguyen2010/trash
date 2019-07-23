import React from 'react';
import { BrowserRouter as Router,
  Route
} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Home from '../Home';
import Login from '../Login';
import DaNang from '../DaNang'

const App = () => (
  <Router>
    <Route path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.LOG_IN} component={Login} />
    <Route path={ROUTES.DA_NANG} component={DaNang} />
  </Router>
);

export default App;