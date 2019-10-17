import React, { ReactElement } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export interface TypeIndustry {
  id: number;
  name: string;
}

const Welcome: React.FC = (): ReactElement => {
  const classes = useStyles();
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [industries] = React.useState<TypeIndustry[]>([
    {
      id: 1,
      name: 'Salon',
    },
    {
      id: 2,
      name: 'Barber Shop',
    },
    {
      id: 3,
      name: 'Janitorial',
    },
  ]);

  const inputProps: TextFieldProps = {
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
    autoFocus: true,
  };

  return (
    <form className={classes.form} noValidate={true}>
      <TextField
        {...inputProps}
        id="email"
        label="Business Name"
        name="email"
        autoComplete="email"
      />
      <FormControl variant="outlined" fullWidth={true} margin="normal">
        <InputLabel ref={inputLabel} htmlFor="indestry">
          Industry
        </InputLabel>
        <Select
          native={true}
          fullWidth={true}
          inputProps={{
            name: 'industry',
            id: 'indestry',
          }}
        >
          <option value="" />
          {industries.map(
            (indeustry: TypeIndustry): ReactElement => (
              <option key={indeustry.id} value={indeustry.id}>
                {indeustry.name}
              </option>
            )
          )}
        </Select>
      </FormControl>
      <TextField
        {...inputProps}
        name="phone"
        label="Phone Number"
        id="phone"
        autoComplete="phone"
      />
    </form>
  );
};

export default Welcome;
