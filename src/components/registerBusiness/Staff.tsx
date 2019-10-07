import React, { ReactElement, ChangeEvent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Face from '@material-ui/icons/Face';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

interface Staff {
  name: string;
  email: string;
}

type Event = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Staff: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [staffs, setStaffs] = React.useState<Staff[]>([]);
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');

  const StaffItem: React.FC<Staff> = (props: Staff): ReactElement => (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Face />
      </ListItemAvatar>
      <ListItemText primary={props.name} />
      <ListItemText primary={props.email} />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(): void => {
          const newStaff = staffs.filter(
            (staff: Staff) => staff.email !== props.email
          );
          setStaffs([...newStaff]);
        }}
      >
        Delete
      </Button>
    </ListItem>
  );

  return (
    <List className={classes.root}>
      {staffs.map(
        (staff: Staff, index: number): ReactElement => (
          <StaffItem key={index} {...staff} />
        )
      )}
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Face />
        </ListItemAvatar>
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="name"
          label="Name"
          name="name"
          autoComplete="email"
          autoFocus={true}
          defaultValue={name}
          onChange={(event: Event): void => setName(event.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus={true}
          defaultValue={email}
          onChange={(event: Event): void => setEmail(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={(): void => {
            setStaffs([...staffs, { name, email }]);
          }}
        >
          Add
        </Button>
      </ListItem>
    </List>
  );
};

export default Staff;
