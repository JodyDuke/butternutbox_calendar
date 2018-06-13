import React, { Component } from 'react';
import ModalWindow from './modal/modal_switch'
import Main from './main/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalWindow />
        <Main />
      </div>
    );
  }
}

export default App;
