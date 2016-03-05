import fs from 'fs';
import path from 'path';

// this used for convinience just constants
export const ADD_PROJECT_TO_LIST = 'ADD_PROJECT_TO_LIST';
export const SET_PROJECTS_LIST = 'SET_PROJECTS_LIST';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT';
export const UPDATE_NEW_PROJECT_FORM = 'UPDATE_NEW_PROJECT_FORM';

// private constants
const PROJECTS_DIR = process.cwd() + '/projects/';
const PROJECTS_JSON_FILE = PROJECTS_DIR + 'projects.json';

// helper functions better to be in other file!!!!!!!
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
};

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isFile();
  });
}

function withinProjectsJson(callback) {
    fs.readFile(PROJECTS_JSON_FILE, 'utf8', function(err, contents) {
        var json = JSON.parse(contents);
        callback(json);
    })
}
/////////////////////////////////////////////////////

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


export function createProject(project) {
    return dispatch => {
        withinProjectsJson(function(json) {
            json[project.dir] = project.title;
        }
    }
}
export function readFoldersFromDisk() {
    return dispatch => {
        withinProjectsJson(function(json) {
            var projects = Object.keys(json).map(
                function(dir) { 
                    return {
                        title: json[dir],
                        dir: dir
                    }
                }
            );
           dispatch(setProjectList(projects));
        })
    }
}

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