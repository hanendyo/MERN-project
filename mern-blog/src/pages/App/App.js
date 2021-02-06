import { Routes } from '../../config/Config';
import {Provider} from 'react-redux'
import {Store} from '../../config/Config.jsx'
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <Routes/>
    </Provider>
  );
}

export default App;
