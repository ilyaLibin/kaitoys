import {CREATE_FRAME, DELETE_FRAME} from '../actions/studioActions';
import { fromJS, List, Map } from 'immutable';

const initialState = fromJS({data: [{
        id: 'frame0',
        duration: 0.3
    },
    {
        id: 'frame1',
        duration: 0.3
    },
    {
        id: 'frame2',
        duration: 0.3
    }
]});


function deleteFrame(state, frame) {
    return state.filter(n => n.id !== frame.id)
}



export default function studio(state = initialState, action) {
    switch(action.type) {
        case CREATE_FRAME:
            return state.push(action.frame);
        case DELETE_FRAME: 
            return deleteFrame(state, action.frame);
    }
    return state;
} 