import React from 'react';
import Timezone from './Timezone';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <Timezone />
    </div>
  );
}

export default App;
