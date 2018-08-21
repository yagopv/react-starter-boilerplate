import React, { Component } from 'react';
import { square } from '../math';

class App extends Component {
  
  render() {
    const x = square(2);
    return (
      <div>
        <h1>Starter template</h1>
      </div>
    );
  }
}

export default App;
