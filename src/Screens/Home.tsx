import React, { ReactElement } from 'react';
import TestStepper from '../components/registerBusiness';
import { Modal, Button, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Home: React.FC = (): ReactElement => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Open Modal
      </Button>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <TestStepper />
      </Modal>
    </div>
  );
};

export default Home;
