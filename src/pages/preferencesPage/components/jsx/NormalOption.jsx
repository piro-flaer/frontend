import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const NormalOption = ({ divIndexValue, prefStateValue, prefSeasonValue, prefDifficultyValue, optionValue }) => {



    return (
        <>
            {
                divIndexValue === 0 ? <span className={optionValue === prefStateValue ? "optionSpan selectedOptionSpan" : "optionSpan"}>{optionValue}</span> :
                    divIndexValue === 1 ? <span className={optionValue === prefSeasonValue ? "optionSpan selectedOptionSpan" : "optionSpan"}>{optionValue}</span> :
                        <span className={optionValue === prefDifficultyValue ? "optionSpan selectedOptionSpan" : "optionSpan"}>{optionValue}</span>
            }

            {
                divIndexValue === 0 ? <CheckCircleIcon className={optionValue === prefStateValue ? "checkIcon showCheckIcon" : "checkIcon"} /> :
                    divIndexValue === 1 ? <CheckCircleIcon className={optionValue === prefSeasonValue ? "checkIcon showCheckIcon" : "checkIcon"} /> :
                        <CheckCircleIcon className={optionValue === prefDifficultyValue ? "checkIcon showCheckIcon" : "checkIcon"} />
            }
        </>
    )
}

export default NormalOption