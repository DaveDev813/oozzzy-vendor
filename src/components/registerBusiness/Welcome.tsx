import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select } from '@material-ui/core';

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

const Welcome: React.FC = (): ReactElement => {
  const classes = useStyles();
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  return (
    <form className={classes.form} noValidate={true}>
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
      <FormControl variant="outlined" fullWidth={true}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Industry
        </InputLabel>
        <Select
          native={true}
          fullWidth={true}
          inputProps={{
            name: 'industry',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value="" />
          <option value={10}>Barber Shop</option>
          <option value={20}>Salon</option>
          <option value={30}>Janitorial</option>
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth={true}
        name="password"
        label="Phone Number"
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </form>
  );
};

export default Welcome;
