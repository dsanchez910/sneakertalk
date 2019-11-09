import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/component/ThreadDisplay';
import './App.css';
import { tsImportEqualsDeclaration } from '@babel/types';

class App extends Component {
  render() {
    return (
      <ThreadDisplay />
    );
 } 
}
export default App;
