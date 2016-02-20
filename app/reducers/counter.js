import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import { fromJS } from 'immutable';

export default function counter(state = fromJS({name:"fsdf"}), action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.set('name', 'increased');
    case DECREMENT_COUNTER:
        return state.set('name', 'decreased');
    default:
      return state;
  }
}

// returns the totaly new thing
// the state is here is not the whole state but only the local part, 
// composeState is what composing the whole thing in the one object