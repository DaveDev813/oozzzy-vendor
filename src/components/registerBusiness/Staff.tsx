import React, { ReactElement, ChangeEvent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Face from '@material-ui/icons/Face';
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';

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
    minWidth: '100px',
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
    <TableRow>
      <TableCell align="center">
        <Face fontSize="large" />
      </TableCell>
      <TableCell align="left">
        <Typography color="primary">{props.name}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography color="primary">{props.email}</Typography>
      </TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          color="secondary"
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
      </TableCell>
    </TableRow>
  );

  return (
    <React.Fragment>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <Face fontSize="large" />
            </TableCell>
            <TableCell align="left">
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
            </TableCell>
            <TableCell align="left">
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
            </TableCell>
            <TableCell align="right">
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
            </TableCell>
          </TableRow>
          {staffs.map(
            (staff: Staff, index: number): ReactElement => (
              <StaffItem key={index} {...staff} />
            )
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default Staff;
