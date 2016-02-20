import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
class Studio extends Component {
    render() {
        const {frames} = this.props;
        return(<div>
                    <ul>
                        {frames.map((frame) => <li key={frame.get('id')}>{frame.get('id')}</li>)}
                    </ul>
                    <Link to="/">Home</Link>
                </div>
            );
    };
}

export default Studio;


//{frames.map(frame => <div key={frame.id}>{frame.id}</div>)}</div>