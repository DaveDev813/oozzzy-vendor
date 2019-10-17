import React, { ReactElement } from 'react';

import moment from 'moment';
import { Calendar, momentLocalizer, stringOrDate } from 'react-big-calendar';
import {
  Theme,
  withStyles,
  DialogActions,
  DialogContent,
  Grid,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

interface SlotInfo {
  start: stringOrDate;
  end: stringOrDate;
  slots: Date[] | string[];
  action: 'select' | 'click' | 'doubleClick';
}

const styles = (theme: Theme): any => ({
  button: {
    margin: theme.spacing(8),
  },
  input: {
    display: 'none',
  },
});

const BookCalendar: React.FC = (props: any): ReactElement => {
  const { classes } = props;

  /**
   * States
   */
  const [events, setEvents] = React.useState<any[]>([]);
  const [title, setTitle] = React.useState<string>('');
  const [start, setStart] = React.useState<stringOrDate>('');
  const [end, setEnd] = React.useState<stringOrDate>('');
  const [desc, setDesc] = React.useState<string>('');
  const [openSlot, setOpenSlot] = React.useState<boolean>(false);
  const [openEvent, setOpenEvent] = React.useState<boolean>(false);
  const [clickedEvent, setClickedEvent] = React.useState<any>({});

  const handleClose = (): void => {
    setOpenEvent(false);
    setOpenSlot(false);
  };

  const handleSlotSelected = (slotInfo: SlotInfo): void => {
    console.log('TCL: slotInfo', slotInfo);
    setTitle('');
    setDesc('');
    setStart(slotInfo.start);
    setEnd(slotInfo.end);
    setOpenSlot(true);
  };

  const handleEventSelected = (event: any): any => {
    setOpenEvent(true);
    setClickedEvent(event);
    setStart(event.start);
    setEnd(event.end);
    setTitle(event.title);
    setDesc(event.desc);
  };

  const handleStartTime = (event: any): any => {
    console.log('TCL: handleStartTime -> event', event);
    // setStart(date);
  };

  const handleEndTime = (event: any): any => {
    console.log('TCL: handleEndTime -> event', event);
    // setEnd(date);
  };

  const setNewAppointment = (): any => {
    const appointment = { title, start, end, desc };
    const newEvents = [...events.slice(), appointment];
    setEvents(newEvents);
  };

  const updateEvent = (): any => {
    const index = events.findIndex((event: any) => event === clickedEvent);
    const updatedEvent = events.slice();
    updatedEvent[index].title = title;
    updatedEvent[index].desc = desc;
    updatedEvent[index].start = start;
    updatedEvent[index].end = end;
    setEvents(updatedEvent);
  };

  const deleteEvent = (): any => {
    const updatedEvents = events.filter(
      (event: any) => event['start'] !== start
    );
    setEvents(updatedEvents);
  };

  return (
    <div id="Calendar">
      {/* react-big-calendar library utilized to render calendar*/}
      <Calendar
        localizer={localizer}
        events={events}
        views={['month', 'week', 'day', 'agenda']}
        timeslots={2}
        defaultView="month"
        defaultDate={new Date()}
        selectable={true}
        onSelectEvent={(event: any): any => handleEventSelected(event)}
        onSelectSlot={(slotInfo: SlotInfo): any => handleSlotSelected(slotInfo)}
      />

      {/* Material-ui Modal for booking new appointment */}
      <Dialog open={openSlot} onClose={handleClose}>
        <DialogTitle id="simple-dialog-title">{`Book an appointment on ${moment(
          start
        ).format('MMMM Do YYYY')}`}</DialogTitle>

        <DialogContent>
          <Grid container={true} direction="column">
            <Grid item={true}>
              <TextField
                fullWidth={true}
                margin="normal"
                label="Title"
                onChange={(e: any): any => {
                  setTitle(e.target.value);
                }}
              />
            </Grid>
            <Grid item={true}>
              <TextField
                fullWidth={true}
                margin="normal"
                label="Description"
                onChange={(e: any): any => {
                  setDesc(e.target.value);
                }}
              />
            </Grid>
            <Grid item={true}>
              <TextField
                fullWidth={true}
                margin="normal"
                label="Start Time"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                defaultValue={start.toString()}
                onChange={handleStartTime}
              />
            </Grid>
            <Grid item={true}>
              <TextField
                fullWidth={true}
                type="time"
                margin="normal"
                label="End Time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                defaultValue={end.toString()}
                onChange={handleEndTime}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={(): any => {
              setNewAppointment();
              handleClose();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Material-ui Modal for Existing Event */}
      <Dialog open={openEvent} onClose={handleClose}>
        <DialogTitle id="simple-dialog-title">{`View/Edit Appointment of ${moment(
          start
        ).format('MMMM Do YYYY')}`}</DialogTitle>
        <DialogContent>
          <Grid container={true} direction="column">
            <Grid item={true}>
              <TextField
                defaultValue={title}
                fullWidth={true}
                margin="normal"
                label="Title"
                onChange={(e: any): any => {
                  setTitle(e.target.value);
                }}
              />
            </Grid>
            <Grid item={true}>
              <TextField
                fullWidth={true}
                margin="normal"
                defaultValue={desc}
                label="Description"
                onChange={(e: any): any => {
                  setDesc(e.target.value);
                }}
              />
            </Grid>
            <Grid item={true}>
              <TextField
                fullWidth={true}
                margin="normal"
                label="Start Time"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                defaultValue={start.toString()}
                onChange={handleStartTime}
              />
            </Grid>
            <Grid item={true}>
              <TextField
                fullWidth={true}
                type="time"
                margin="normal"
                label="End Time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                defaultValue={end.toString()}
                onChange={handleEndTime}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleClose}
          >
            Cancel
          </Button>
          ,
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => {
              deleteEvent();
              handleClose();
            }}
          >
            Delete
          </Button>
          ,
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={(): any => {
              updateEvent();
              handleClose();
              handleClose();
            }}
          >
            Confirm Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// export default Calendar;
export default withStyles(styles)(BookCalendar);
