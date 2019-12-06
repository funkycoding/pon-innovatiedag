import React, { useState, useEffect } from 'react';
import lotLizardService from '../services/lotLizardService';
import ParkingLotHeader from './ParkingLotHeader';
import ChargeFilter from './ChargeFilter';
import { Box, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  parkingSpot: {
    height: 50,
    width:32,
    padding: 4,
    borderRadius:0,
    border: 1,
    borderColor: "black",
    backgroundColor: "#C4C4C4"
  },
  parkingCard : {
    padding: 48,
    margin: 16
  }
}));

const PrioritySelector = props => {
  const [parkingLot, setParkingLot] = useState({});
  const [filterChargers, setChargerState] = useState(false);
  const [parkingSpaces, setParkingSpace] = useState({ spaces: [], rows: [], columns: [] });

  const classes = useStyles();

  useEffect(() => {
    async function fetchParkingLot() {
      const result = await lotLizardService.getParkingLot(1);
      setParkingLot(result);
    }

    async function fetchParkingLotSpaces() {
      const result = await lotLizardService.getParkingSpaces(1);

      const rows = [
        ...new Set(
          result.map(space => {
            return space.row;
          })
        )
      ];
      const columns = [
        ...new Set(
          result.map(space => {
            return space.column;
          })
        )
      ];

      setParkingSpace({ spaces: result, rows, columns });
    }
    fetchParkingLot();
    fetchParkingLotSpaces();
  }, [props.parkingLotId]);

  const setFilterChargers = event => {
    setChargerState(event.target.checked);
  };

  let grid;

  return (
    <>
      {parkingLot && (
        <>
          <ParkingLotHeader name={parkingLot.name} description={parkingLot.description} id={parkingLot.id} />
          <ChargeFilter setFilterCharger={setFilterChargers} filterChargers={filterChargers} />
        </>
      )}
      <Card className={classes.parkingCard}>
      {parkingSpaces.rows.map(row => {
        return (
          <Box display='flex' flexDirection='row' justifyContent='center' key={row}>
          {
            parkingSpaces.columns.map( col => {
              return (
              <>
                <Box display='flex' flexDirection='column' justifyContent='space-between' style={{height: 140}} key={row + col}>
                  <Card className={classes.parkingSpot}>{row}{col}L</Card>
                  <Card className={classes.parkingSpot}>{row}{col}R</Card>
                </Box>
              </>
              );              
            })
          }
          </Box>
        )}
        )
      }
      </Card>
    </>
  );
};

export default PrioritySelector;
