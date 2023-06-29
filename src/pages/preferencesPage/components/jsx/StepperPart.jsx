import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import TerrainIcon from '@mui/icons-material/Terrain';
import MapIcon from '@mui/icons-material/Map';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "../css/StepperPart.css"

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient(136deg, #6a66e1 0%, #7c83e5 50%, #96a4ea 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient(136deg, #6a66e1 0%, #7c83e5 50%, #96a4ea 100%)',
    }),
}));


function ColorlibStepIcon(props) {
    const { active, completed, icon } = props;

    const icons = {
        1: <MapIcon />,
        2: <WbSunnyIcon />,
        3: <TerrainIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }}>
            {icons[icon]}
        </ColorlibStepIconRoot>
    );
}

const PreferencePageDesign = ({ divIndexValue }) => {
    const preferencesCategory = ['State', 'Season', 'Difficulty'];

    return (
        <div style={{ width: "100%" }}>
            <Stepper activeStep={divIndexValue}>
                {preferencesCategory.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default PreferencePageDesign