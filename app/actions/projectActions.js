// this used for convinience just constants
export const ADD_PROJECT_TO_LIST = 'ADD_PROJECT_TO_LIST';
export const SET_PROJECTS_LIST = 'SET_PROJECTS_LIST';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT';
export const UPDATE_NEW_PROJECT_FORM = 'UPDATE_NEW_PROJECT_FORM';


// this is action creators
export function setCurrentProject(id) {
    return {
        type: SET_CURRENT_PROJECT,
        id: id
    }
};

export function deleteProject(id) {
    return {
        type: DELETE_PROJECT,
        id: id
    }
};

export function addProjectToList(project) {
    return {
        type: ADD_PROJECT_TO_LIST,
        project: project
    }
};

export function setProjectList(projects) {
    return {
        type: SET_PROJECTS_LIST,
        projects: projects
    }
}

export function updateNewProjectForm(project) {
    return {
        type: UPDATE_NEW_PROJECT_FORM,
        project: project
    }
}