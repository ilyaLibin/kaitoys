import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
/* material elements */
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';


// this lines needed to make material ui tabs and select box work
injectTapEventPlugin();

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };


  constructor(props) {
    super(props);
    this.state = {
      tab: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      tab: value,
    });
  };

  render() {
    return (
        <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label="Tab A" value="a" >
                <div>
                    {this.props.children}
                    {
                      (() => {
                        if (process.env.NODE_ENV !== 'production') {
                          const DevTools = require('./DevTools');
                          return <DevTools />;
                        }
                      })()
                    }
                </div>
            </Tab>
            <Tab label="Tab B" value="b" >
                <div>Something else</div>
            </Tab>
        </Tabs>
    );
  }
}
