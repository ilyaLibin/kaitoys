import React, { Component } from 'react';
import CreateProjectForm from './CreateProjectForm'
export default class Home extends Component {

    
    initialStatenewProject = {
        name: 'My new project',
    }

    updateForm = function() {

    }

    projectFolderName = function(string) {
        return string.toLowerCase().split(' ').join('_');
    };

    createProject = function() {
        // validateInput. special chars, existing?
    };

    render() {
        return (
            <div className="home-view">
                <main>
                    <CreateProjectForm onChange={this.updateForm}/>
                </main>
                <aside>
                    <h3>Existing projects</h3>
                </aside>
            </div>
        );
    }
}
