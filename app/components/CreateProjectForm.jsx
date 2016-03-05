import React, { Component } from 'react';
import projects from '../../app/reducers/projects'

// material ui
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

export default class createProjectForm extends Component {

    updateForm = function(e) {
        let obj = {}
        obj[e.target.name] = e.target.value;
        if (e.target.name === 'title') {
            obj.dir = this.projectFolderName(e.target.value);
        }
        this.props.updateNewProjectForm(obj);
    }

    projectFolderName = function(string) {
        return string.toLowerCase().split(' ').join('_');
    };

    createProject = function() {
            this.props.addProjectToList(this.props.projects.get('newProjectForm'));
            this.props.updateNewProjectForm({});

    };

    render() {
        const {addProjectToList, updateNewProjectForm, readFoldersFromDisk, projects} = this.props;
        return (
            <form onChange={this.updateForm.bind(this)}>
                <h3>Create new project</h3>
                <TextField name="title" hintText="Project name" value={projects.getIn(['newProjectForm', 'title'])} /><br/>
                <RaisedButton label="Create project" secondary={true} onClick={(this.createProject.bind(this))} />
            </form> 
        );
    }
}