import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import StudioPage from './containers/StudioPage';


export default (
  <Route path="/" component={HomePage}>
    <IndexRoute component={HomePage} />
    <Route path="/studio" component={StudioPage} />
  </Route>
);
