import React, { useState } from 'react';
import './App.css';
import {AppUI} from './AppUI';
import {TodoProvider} from '../TodoContext';
function App() {
 
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
