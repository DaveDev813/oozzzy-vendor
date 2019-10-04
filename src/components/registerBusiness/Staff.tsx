import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Switch, TextField } from '@material-ui/core';

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

const Staff: React.FC = (): ReactElement => {
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
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            id="email"
            label="Business Name"
            name="email"
            autoComplete="email"
            autoFocus={true}
          />
        </Grid>
        <Grid item={true} xs={3}>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth={true}
            id="email"
            label="Business Name"
            name="email"
            autoComplete="email"
            autoFocus={true}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default Staff;
