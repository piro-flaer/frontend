import React from 'react'
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Switch = () => {
    return (
        <>
            <div className="switchClass day">
                <Brightness7Icon />
                <p style={{ height: "100px" }}></p>
                <DarkModeIcon />
            </div>
        </>
    )
}

export default Switch