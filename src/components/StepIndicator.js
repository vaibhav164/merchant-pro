import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height:"50%",  
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['About Store', 'Add Listing ', 'Set Up Financials', "Review and Launch"];
  }
  
  export default function SteoIndicator (){
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    // const handleNext = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };
  
    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
  
    const handleReset = () => {
      setActiveStep(1);
    };
  
    return (
      // <div style={{margin:0, padding:0, display:"flex",}}>
        <div className={classes.root} style={{backgroundColor:"#EEEEEE", marginTop:0,padding:0, display:"block", position:"absolute",width:"100%"}}>
          <Stepper activeStep={activeStep} alternativeLabel  style={{backgroundColor:"#EEEEEE"}}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div  style={{backgroundColor:"#EEEEEE"}}>
            {activeStep === steps.length ? (
              <div>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <h4 style={{textAlign:"center", margin:0}}>Add Store Listing </h4>
                <p style={{fontSize:11, display:"inline-block", marginTop:"1%", textAlign:"center"}}>Tell us about you and Store </p>
                {/* <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div> */}
              </div>
            )}
          </div>
        </div>
      // </div>
      );
    }
