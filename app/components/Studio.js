import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {fromJS} from 'immutable';
import CameraView from './CameraView';
/* material ui */
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';

class Studio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    createeFrame = function(e) {
        let frame = fromJS({
            duration: 3,
            id: 'frame' + Date.now()
        })
        this.props.createFrame(frame)
    };

    handleChange = function(event, index, value) {this.duration = value};
    render() {
        const {frames, createFrame} = this.props;
        return(<div>    
                    <CameraView></CameraView>
                    {frames.size}
                    <ul>
                        {frames.map((frame) => <li key={frame.get('id')}>{frame.get('id')}</li>)}
                    </ul>
                    <TextField hintText="Hint Text"/>
                    <br/>
                    <SelectField value={1} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Never"/>
                        <MenuItem value={2} primaryText="Every Night"/>
                    </SelectField><br/>
                    <RaisedButton label="Secondary" secondary={true} onClick={this.createeFrame.bind(this)} /><br/>
                    <Link to="/">Home</Link>
                </div>
            );
    };
}

export default Studio;


//{frames.map(frame => <div key={frame.id}>{frame.id}</div>)}</div>