import React, { Component } from 'react';
import projects from '../../app/reducers/projects'

// material ui
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltipPosition="bottom-left">
        <MoreVertIcon color={Colors.grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

export default class ProjectsList extends Component {

    componentDidMount = function() {
        this.props.readFoldersFromDisk();
    }

    render() {
        const {projects} = this.props;
        return (
            <List>
                {projects.get('projectsList').map(project => <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    rightIconButton={rightIconMenu}
                    key={project.get('dir')}
                    primaryText={project.get('title')}/>)}
            </List>
        );
    }
}