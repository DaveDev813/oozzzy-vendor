import React, { ReactElement } from 'react';
import TestStepper from '../components/registerBusiness';
import { Modal, Button } from '@material-ui/core';

const Home: React.FC = (): ReactElement => {
  const [open, setOpen] = React.useState(false);

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
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <TestStepper />
      </Modal>
    </div>
  );
};

export default Home;
