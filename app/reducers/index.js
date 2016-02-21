import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import studio from './studio';

const rootReducer = combineReducers({
  studio,
  routing
});

export default rootReducer;
