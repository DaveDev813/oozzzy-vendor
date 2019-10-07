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
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Face />
      </ListItemAvatar>
      <ListItemText primary={props.serviceName} />
      <ListItemText primary={props.price} />
      <ListItemText primary={props.time} />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(): void => {
          const newServicesList: TypeServices[] = servicesList.filter(
            (service: TypeServices) => service.serviceName !== props.serviceName
          );
          setServicesList([...newServicesList]);
        }}
      >
        Delete
      </Button>
    </ListItem>
  );

  return (
    <List className={classes.root}>
      {servicesList.map(
        (staff: TypeServices, index: number): ReactElement => (
          <ServicesList key={index} {...staff} />
        )
      )}
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
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
          onChange={(event: Event): void => setServiceName(event.target.value)}
        />
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
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={(): void => {
            setServicesList([...servicesList, { serviceName, time, price }]);
          }}
        >
          Add
        </Button>
      </ListItem>
    </List>
  );
};

export default Services;
