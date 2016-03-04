import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import studio from './studio';
import projects from './projects';

const rootReducer = combineReducers({
  studio,
  projects,
  routing
});

export default rootReducer;
