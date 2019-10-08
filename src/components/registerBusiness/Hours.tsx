import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box, Button, Switch } from '@material-ui/core';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
  row: {
    borderBottom: '1px solid #e0e0e0',
  },
  time: {
    maxWidth: '130px',
  },
}));

const Hours: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date: Date | null): void => {
    setSelectedDate(date);
  };
  return (
    <form className={classes.form} noValidate={true}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
        className={classes.row}
      >
        <Box m={1}>
          <Typography color="primary" style={{ fontWeight: 'bold' }}>
            Monday
          </Typography>
        </Box>
        <Box m={1}>
          <Switch color="primary" />
        </Box>
        <Box m={1}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box m={1}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  className={classes.time}
                  id="time-picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Box>
            <Box m={1}>
              <Typography color="primary" style={{ fontWeight: 'bold' }}>
                to
              </Typography>
            </Box>
            <Box m={1}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  className={classes.time}
                  id="time-picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
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
