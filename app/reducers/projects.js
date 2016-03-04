//import {CREATE_FRAME, DELETE_FRAME} from '../actions/studioActions';
import { fromJS, List, Map } from 'immutable';
import {SET_CURRENT_PROJECT, 
        ADD_PROJECT_TO_LIST, 
        SET_PROJECTS_LIST, 
        DELETE_PROJECT,
        UPDATE_NEW_PROJECT_FORM,
        setCurrentProject,
        addProjectToList,
        setProjectList,
        updateNewProjectForm,
        deleteProject } from '../actions/projectActions';

const initialState = fromJS({
    currentProjectId: 0,
    projectsList: [
        {   
            title: 'My first project',
            dir: 'my_first_project'
        }
    ]
});


function deleteFrame(state, frame) {
    return state.filter(n => n.id !== frame.id)
}

export default function projects(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_PROJECT:
            if (state.getIn(['projectsList', action.id])) {
                return state.set('currentProjectId', action.id);
            } else {
                return state;
            }

        case ADD_PROJECT_TO_LIST:
            return state.update('projectsList', list => list.push(fromJS(action.project)));

        case SET_PROJECTS_LIST:
            return state.set('projectsList', fromJS(action.projects));

        case UPDATE_NEW_PROJECT_FORM:
            return state.set('newProjectForm', fromJS(action.project));

        case DELETE_PROJECT:
            let newState = state.update('projectsList', list => list.splice(action.id, 1));
            if (newState.get('currentProjectId') === action.id) {
                return newState.set('currentProjectId', null);
            } else {
                return newState;
            }

        default:
            return state;
    }
} 