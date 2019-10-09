import React, { ReactElement, ChangeEvent } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
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

interface TypeServices {
  serviceName: string;
  time: string;
  price: number;
}

type Event = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Services: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [servicesList, setServicesList] = React.useState<TypeServices[]>([]);
  const [serviceName, setServiceName] = React.useState<string>('');
  const [time, setTime] = React.useState<string>('');
  const [price, setPrice] = React.useState<any>(0);

  const ServicesList: React.FC<TypeServices> = (
    props: TypeServices
  ): ReactElement => (
    <TableRow>
      <TableCell align="left">
        <Typography color="primary">{props.serviceName}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography color="primary">{props.time}</Typography>
      </TableCell>
      <TableCell align="left">
        <Typography color="primary">{props.price}</Typography>
      </TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={(): void => {
            const newServicesList: TypeServices[] = servicesList.filter(
              (service: TypeServices) =>
                service.serviceName !== props.serviceName
            );
            setServicesList([...newServicesList]);
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
            <TableCell align="left">
              <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                id="sarviceName"
                label="Service Name"
                name="serviceName"
                autoComplete="serviceName"
                autoFocus={true}
                defaultValue={serviceName}
                onChange={(event: Event): void =>
                  setServiceName(event.target.value)
                }
              />
            </TableCell>
            <TableCell align="left">
              <TextField
                variant="outlined"
                margin="normal"
                required={true}
                fullWidth={true}
                id="time"
                label="Time"
                name="time"
                autoComplete="time"
                autoFocus={true}
                defaultValue={time}
                onChange={(event: Event): void => setTime(event.target.value)}
              />
            </TableCell>
            <TableCell align="left">
              <TextField
                variant="outlined"
                margin="normal"
                type="number"
                required={true}
                fullWidth={true}
                id="price"
                label="Price"
                name="price"
                autoComplete="price"
                autoFocus={true}
                defaultValue={price}
                onChange={(event: Event): void => setPrice(event.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(): void => {
                  setServicesList([
                    ...servicesList,
                    { serviceName, time, price },
                  ]);
                }}
              >
                Add
              </Button>
            </TableCell>
          </TableRow>
          {servicesList.map(
            (staff: TypeServices, index: number): ReactElement => (
              <ServicesList key={index} {...staff} />
            )
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default Services;
