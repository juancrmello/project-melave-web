import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

function App() {
  return (<Routes history={history}>
    <Routes />
  </Routes>)
}

export default App;
