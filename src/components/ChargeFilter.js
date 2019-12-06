import { Box, Card, Switch, Typography } from '@material-ui/core';
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
    height: 35
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const ChargeFilter = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Typography variant='subtitle1' component='subtitle1'>
          Parkeerplaats met laadpaal <FlashOn />
        </Typography>
        <Switch
          checked={props.filterChargers}
          onChange={props.setFilterCharger}
          value="Filter Charger"
      />
      </Box>
    </Card>
  );
};

ChargeFilter.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string
};

export default ChargeFilter;
