import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import ButtonAppBar from './components/ButtonAppBar';
import Closest from './components/Closest';
import Home from './components/Home';
import Selector from './components/Selector';
import LotLizzardService from './services/lotLizzardService';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#C54F00'
  },
  },
});



function App() {

  LotLizzardService.getParkingSpaces(1, [15, 15]).then(data => {
    console.log(data);
  })

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Router>
        <Switch>
          <Route path='/selector'>
            <Selector />
          </Route>
          <Route path='/closest'>
            <Closest />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
