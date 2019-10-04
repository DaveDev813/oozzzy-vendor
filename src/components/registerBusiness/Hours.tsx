import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Switch, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const Hours: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <form className={classes.form} noValidate={true}>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={3}>
          Monday
        </Grid>
        <Grid item={true} xs={3}>
          <Switch
            value="checkedB"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Grid>
        <Grid item={true} xs={3}>
          <FormControl variant="outlined" fullWidth={true}>
            <Select
              native={true}
              fullWidth={true}
              inputProps={{
                name: 'from',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value={10}>5:00 AM</option>
              <option value={20}>6:00 AM</option>
              <option value={30}>7:00 AM</option>
            </Select>
          </FormControl>
          to
          <FormControl variant="outlined" fullWidth={true}>
            <Select
              native={true}
              fullWidth={true}
              inputProps={{
                name: 'from',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value={10}>5:00 PM</option>
              <option value={20}>6:00 PM</option>
              <option value={30}>7:00 PM</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item={true} xs={3}>
          Apply to all
        </Grid>
      </Grid>
    </form>
  );
};

export default Hours;
