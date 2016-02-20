import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import counter from './counter';
import studio from './studio';

const rootReducer = combineReducers({
  counter,
  studio,
  routing
});

export default rootReducer;
