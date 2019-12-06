import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Home from './components/Home';
import ParkingSpots from './components/ParkingSpots';
import PrioritySelector from './components/PrioritySelector';
import LotLizardService from './services/lotLizardService';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#C54F00'
    },
  },
  
});

function App() {
  LotLizardService.getParkingLots();
  LotLizardService.getParkingLot(1);
  LotLizardService.getParkingSpaces(1);
  LotLizardService.getParkingSpace(1, '1A1');

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Router>
        <Switch>
          <Route path='/PrioritySelector'>
            <PrioritySelector />
          </Route>
          <Route path='/ParkingSpots'>
            <ParkingSpots />
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
