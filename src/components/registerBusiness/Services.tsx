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
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText,
} from '@material-ui/core';
import Face from '@material-ui/icons/Face';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  button: {
    minWidth: '100px',
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

const names: string[] = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

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
  /**
   * multi select
   */
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setPersonName(event.target.value as string[]);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

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
            <TableCell align="left">
              <FormControl className={classes.formControl} variant="outlined">
                <InputLabel htmlFor="select-multiple-chip">Staff</InputLabel>
                <Select
                  variant="outlined"
                  multiple={true}
                  value={personName}
                  onChange={handleChange}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={(selected: any): any => {
                    const staffCount = selected as string[];
                    return (
                      <React.Fragment>
                        <Face fontSize="large" /> {staffCount.length}
                      </React.Fragment>
                    );
                  }}
                  MenuProps={MenuProps}
                >
                  {names.map((name: any): any => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
