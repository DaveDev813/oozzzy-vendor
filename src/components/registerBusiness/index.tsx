import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Welcome from './Welcome';
import Hours from './Hours';
import Staff from './Staff';
import Services from './Services';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    position: 'absolute',
    maxWidth: '750px',
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Welcome', 'Hours', 'Staff', 'Services'];

const getStepContent = (step: any): any => {
  switch (step) {
    case 0:
      return <Welcome />;
    case 1:
      return <Hours />;
    case 2:
      return <Staff />;
    case 3:
      return <Services />;
  }
};

const TestStepper: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (): void => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h4" align="center">
        Welcome
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label: any) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom={true}>
              Thank you
            </Typography>
            <Typography variant="subtitle1">
              Done business registration
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    </Paper>
  );
};

export default TestStepper;
