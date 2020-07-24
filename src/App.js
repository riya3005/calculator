import React from 'react';

import './App.css';
//import Keypad from './components/Keypad';
//import KeypadFCNew from './components/KeypadFC';
import { BrowserRouter } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import KeypadFC from './components/KeypadFC';
import CurrencyConvertor from './components/CurrencyConvertor'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FirstPage>
          <Switch>
            <Route path="/" exact component={KeypadFC} />
            <Route path="/currency" exact component={CurrencyConvertor} />
          </Switch>
        </FirstPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
