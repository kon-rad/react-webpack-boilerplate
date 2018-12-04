'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import style from  '../style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  render() {
    if (this.state.time === 0) {
      return (
        <button className={style.stopButton + ' ' +  style.button} onClick={() => this.setState({ time: 100 }) }>
          Stop
        </button>

      )
    }

    return (
      <button className={style.startButton + ' ' +  style.button} onClick={() => this.setState({ time: 0 }) }>
        Start
      </button>

    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));