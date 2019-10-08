import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  FormControl,
  Select,
  Typography,
  Box,
  Button,
} from '@material-ui/core';

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
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box m={1}>
          <Typography color="primary" style={{ fontWeight: 'bold' }}>
            Monday
          </Typography>
        </Box>
        <Box m={1}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box m={1}>
              <FormControl variant="outlined">
                <Select
                  native={true}
                  inputProps={{
                    name: 'timeTo',
                  }}
                >
                  <option value={10}>5:00 PM</option>
                  <option value={20}>6:00 PM</option>
                  <option value={30}>7:00 PM</option>
                </Select>
              </FormControl>
            </Box>
            <Box m={1}>
              <Typography color="primary" style={{ fontWeight: 'bold' }}>
                to
              </Typography>
            </Box>
            <Box m={1}>
              <FormControl variant="outlined">
                <Select
                  native={true}
                  inputProps={{
                    name: 'timeTo',
                  }}
                >
                  <option value={10}>5:00 PM</option>
                  <option value={20}>6:00 PM</option>
                  <option value={30}>7:00 PM</option>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box m={1}>
          <Button color="primary" variant="contained">
            Apply to all
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Hours;
