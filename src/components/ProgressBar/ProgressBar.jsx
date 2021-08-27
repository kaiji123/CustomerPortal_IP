import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../../style/Cards.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {},
  resetContainer: {},
  stepIcon: {
    color: "green",
  },
}));

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ``;
    case 1:
      return "";
    case 2:
      return ``;
    default:
      return "Unknown step";
  }
}

export default function ProgressBar() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <div className="third-column">
        <div className={classes.root}>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            {steps.map((label, index) => (
              <Step style={{ color: "white" }} key={label}>
                <StepLabel
                  style={{ color: "white" }}
                  StepIconProps={{
                    classes: { root: classes.stepIcon },
                  }}
                >
                  <div style={{ color: "white" }}>{label}</div>
                </StepLabel>
                <StepContent style={{ color: "white" }}>
                  <Typography>{getStepContent(index)}</Typography>
               
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </div>
    </div>
  );
}
