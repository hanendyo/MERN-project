import './App.css';

import {Provider} from 'react-redux'

import { Routes } from '../../config/Config';
import {Store} from '../../config/Config.jsx'

function App() {
  return (
    <Provider store={Store}>
      <Routes/>
    </Provider>
  );
}

export default App;
