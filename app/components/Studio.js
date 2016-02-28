import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {fromJS} from 'immutable';
import CameraView from './CameraView';
/* material ui */
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class Studio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 'a',
        };
    }

    changeTab = (tab) => {
        this.setState({
            tab: tab,
        });
    };

    createFrame = function(e) {
        let frame = fromJS({
            duration: 3,
            id: 'frame' + Date.now()
        })
        this.props.createFrame(frame)
    };

    handleChange = function(event, index, value) {this.duration = value};
    render() {
        const {frames, createFrame} = this.props;
        return(<Tabs value={this.state.tab} onChange={this.changeTab}>
                    <Tab label="Tab A" value="a" >
                        <CameraView></CameraView>
                        {frames.size}
                        <ul>
                            {frames.map((frame) => <li key={frame.get('id')}>{frame.get('id')}</li>)}
                        </ul>
                        <TextField hintText="Hint Text"/>
                        <br/>
                        <RaisedButton label="Secondary" secondary={true} onClick={this.createFrame.bind(this)} /><br/>
                        <Link to="/">Home</Link>
                    </Tab>
                    <Tab label="Tab B" value="b" >
                        <div>Something else</div>
                    </Tab>
                </Tabs>
            );
    };
}

export default Studio;


//{frames.map(frame => <div key={frame.id}>{frame.id}</div>)}</div>