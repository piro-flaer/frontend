import React, { useState } from 'react';
import StepperPart from "./StepperPart"
import PreferenceFormPart from "./PreferenceFormPart"
import ButtonDesign from "./ButtonDesign"


const PreferencePageDesign = () => {

    const [direction, setDirection] = useState()
    const [divIndex, setDivIndex] = useState(0)

    const [prefState, setPrefState] = useState("NA")
    const [prefSeason, setPrefSeason] = useState("NA")
    const [prefDifficulty, setPrefDifficulty] = useState("NA")

    return (
        <div className='formHolderBG'>
            <StepperPart divIndexValue={divIndex} />
            <PreferenceFormPart divIndexValue={divIndex} directionValue={direction} prefStateValue={prefState} prefSeasonValue={prefSeason} prefDifficultyValue={prefDifficulty} />
            <ButtonDesign divIndexValue={divIndex} setDivIndexValue={setDivIndex} setDirectionValue={setDirection} setPrefStateValue={setPrefState} setPrefSeasonValue={setPrefSeason} setPrefDifficultyValue={setPrefDifficulty} />
        </div>
    )
}

export default PreferencePageDesign