import { Card, Typography, Box } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { FlashOn } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  card: {
    padding: 4,
    paddingLeft: 16,
    margin: 16,
    marginTop: 8,
    height: 34
  },
  avatar: {
    backgroundColor: red[500]
  },
  hasCharger: {
    color: "#000000" 
  },
  noCharger: {
    color: "#DCDCDC" 
  }
}));

const ParkingSpotCard = (props) => {
  const classes = useStyles();
  console.log(props);

  const title = 'Parkeerplaats ' + props.row + props.column + ' ' + (props.side ? props.side : '');

  return (
    <Card className={classes.card}>
      <Box display="flex"  flexDirection='row' justifyContent='space-between'>
          <Typography variant='subtitle1' component='subtitle1'>
            {title}
          </Typography>
          <FlashOn className={props.hasCharger ? classes.hasCharger : classes.noCharger} />
      </Box>
    </Card>
  );
};

ParkingSpotCard.propTypes = {
  row: PropTypes.string,
  column: PropTypes.number,
  hasCharger: PropTypes.bool,
  isFree: PropTypes.bool,
  side: PropTypes.string
};

export default ParkingSpotCard;
