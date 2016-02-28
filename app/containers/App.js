import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

// this lines needed to make material ui tabs and select box work
injectTapEventPlugin();

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
        <div>
            {this.props.children}
            {
              (() => {
                if (process.env.NODE_ENV !== 'production') {
                  const DevTools = require('./DevTools');
                  //return <DevTools />;
                }
              })()
            }
        </div>
    );
  }
}
