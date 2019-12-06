import React, { useEffect, useState } from 'react';
import ParkingLotHeader from './ParkingLotHeader';
import ParkingSpotCard from './ParkingSpotCard';
import { Typography } from '@material-ui/core';
import lotLizardService from '../services/lotLizardService';

var ParkingSpots = (props) => {
  const [parkingLot, setData] = useState({ parkingLot: {} });

  useEffect(() => {
    async function fetchParkingLot() {
      const result = await lotLizardService.getParkingLot(1);
      setData(result);
    }
    fetchParkingLot();
  }, [props.parkingLotId]);

  return (
    <>
      {parkingLot && (
        <>
          <ParkingLotHeader name={parkingLot.name} description={parkingLot.description} id={parkingLot.id} />
          <Typography variant='overline' display='block' style={{ marginLeft: 20 }}>
            Beste beschikbare parkeerplaatsen
          </Typography>
          <ParkingSpotCard row='A' column={1} hasCharger={true} isFree={true} />
          <ParkingSpotCard row='A' column={1} hasCharger={true} isFree={true} />
          <ParkingSpotCard row='A' column={1} hasCharger={false} isFree={true} />
        </>
      )}
    </>
  );
};

export default ParkingSpots;
