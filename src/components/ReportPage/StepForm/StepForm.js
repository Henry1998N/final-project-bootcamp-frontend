import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import Overview from './Overview';
import { AppContext } from './Context';

const labels = ['Residents Status', 'Personal Plans', 'General Activities', 'Overview'];

const handleSteps = (step, apartmentName) => {
  switch (step) {
    case 0:
      return <FirstStep apartmentName={apartmentName}/>;
    case 1:
      return <SecondStep/>;
    case 2:
        return <ThirdStep />;
    case 3:
      return <Overview/>;
    default:
      throw new Error('Unknown step');
  }
};

export default function StepForm({apartmentName}) {
  const { activeStep } = useContext(AppContext);
  const Success = () => {
    alert("success")
  }

  return (
    <>
      {activeStep === labels.length ? (
        Success()
      ) : (
        <>
          <Box sx={{ my: 5 }}>
            <Typography variant="h4" align="center">
              Create New Report
            </Typography>
            <Typography variant="subtitle2" align="center" sx={{ mt: 2 }}>
              Fill in all the fields for the shift report.
            </Typography>
          </Box>
          <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep, apartmentName)}
        </>
      )}
    </>
  );
}
