import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ReactMotionGroup extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*eslint-disable quotes*/
    const env = ENVIRONMENT;
    if (env !== 'production') {
      document.write(
        '<script src="http://' + (location.host || 'localhost').split(':')[0] +
        ':35729/livereload.js?snipver=1"></' + 'script>'
      );   
    } 
    /*eslint-enable quotes */
  }

  render() {
    return (
      <div>Aimed to fix animation issue</div>
    );
  }
}

ReactDOM.render(<ReactMotionGroup />, document.querySelector('#app'));
