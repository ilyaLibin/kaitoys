import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import projects from '../../app/reducers/projects'
import {SET_CURRENT_PROJECT, 
        ADD_PROJECT_TO_LIST, 
        SET_PROJECTS_LIST, 
        DELETE_PROJECT,
        setCurrentProject,
        addProjectToList,
        setProjectList,
        deleteProject } from '../../app/actions/projectActions';

const initialState = fromJS({
    currentProjectId: 0,
    projectsList: [
        {   
            title: 'My first project',
            dir: 'my_first_project'
        }
    ] 
});

describe('project action creators', () => {
    it('creates SET_CURRENT_PROJECT action', () => {
        const id = 0;

        const action = setCurrentProject(id);

        expect(action).to.eql({
            type: SET_CURRENT_PROJECT,
            id: 0
        })
    });

    it('creates ADD_PROJECT_TO_LIST action', () => {
        const project = {
            title: 'My first project',
            dir: 'my_first_project'
        };

        const action = addProjectToList(project);

        expect(action).to.eql({
            type: ADD_PROJECT_TO_LIST,
            project: project
        })
    });

    it('creates SET_PROJECTS_LIST action', () => {
        const projectList = [{
            title: 'My first project',
            dir: 'my_first_project'
        }];
        const action = setProjectList(projectList);

        expect(action).to.eql({
            type: SET_PROJECTS_LIST,
            projects: projectList
        });
    });

    it('creates DELETE_PROJECT action', () => {
        const id = 2;
        const action = deleteProject(id);

        expect(action).to.eql({
            type: DELETE_PROJECT,
            id: id
        });
    })
});


describe('projects reducer', () => {
    it('Handles SET_CURRENT_PROJECT', () => {
        const state = initialState.set('currentProjectId', null);
        const action = setCurrentProject(0);
        const newState = projects(state, action)
        expect(newState).to.equal(initialState.set('currentProjectId', 0));
    });

    it('handles SET_CURRENT_PROJECT action and rejects update if the project is not in a array', () => {
        const state = initialState.set('currentProjectId', 0);
        const action = setCurrentProject(1);
        const newState = projects(state, action)
        expect(newState).to.equal(initialState);
    });

    it('handles ADD_PROJECT_TO_LIST and add a new project to list', () => {
        const project = {
            title: 'My second project',
            dir: 'my_second_project'
        }

        const action = addProjectToList(project);
        const newState = projects(initialState, action);

        expect(newState).to.equal(fromJS({
            currentProjectId: 0,
            projectsList: [
                {   
                    title: 'My first project',
                    dir: 'my_first_project'
                },
                {
                    title: 'My second project',
                    dir: 'my_second_project'
                }
            ] 
        }));

    });


    it('handles SET_PROJECTS_LIST', () => {

        const state = fromJS({
            currentProjectId: null,
            projectsList: []
        });
        const projectList = [
            {   
                title: 'My first project',
                dir: 'my_first_project'
            },
            {
                title: 'My second project',
                dir: 'my_second_project'
            }
        ];
        const action = setProjectList(projectList);
        const newState = projects(state, action);

        expect(newState).to.equal(fromJS({
            currentProjectId: null,
            projectsList: [{   
                title: 'My first project',
                dir: 'my_first_project'
            },
            {
                title: 'My second project',
                dir: 'my_second_project'
            }]
        }))

    });

    it('handles DELETE_PROJECT', () => {
        const state = fromJS({
            currentProjectId: null,
            projectsList: [{   
                title: 'My first project',
                dir: 'my_first_project'
            },
            {
                title: 'My second project',
                dir: 'my_second_project'
            }]
        });

        const action = deleteProject(1);

        const newState = projects(state, action);

        expect(newState).to.equal(fromJS({
            currentProjectId: null,
            projectsList: [{   
                title: 'My first project',
                dir: 'my_first_project'
            }]
        }));
    });

    it('handles DELETE_PROJECT and clean current project id', () => {
        const state = fromJS({
            currentProjectId: 1,
            projectsList: [{   
                title: 'My first project',
                dir: 'my_first_project'
            },
            {
                title: 'My second project',
                dir: 'my_second_project'
            }]
        });

        const action = deleteProject(1);

        const newState = projects(state, action);

        expect(newState).to.equal(fromJS({
            currentProjectId: null,
            projectsList: [{   
                title: 'My first project',
                dir: 'my_first_project'
            }]
        }));
    })


});


