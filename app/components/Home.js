import React, { Component } from 'react';
import CreateProjectForm from './CreateProjectForm';
import ProjectsList from './ProjectsList';

export default class Home extends Component {

    render() {
        const {projects, addProjectToList, updateNewProjectForm} = this.props;
        return (
            <div className="home-view">
                <main>
                    <CreateProjectForm addProjectToList={addProjectToList} updateNewProjectForm={updateNewProjectForm} projects={projects}/>
                </main>
                <aside>
                    <h3>Existing projects</h3>
                    <ProjectsList projects={projects}/>
                </aside>
            </div>
        );
    }
}
