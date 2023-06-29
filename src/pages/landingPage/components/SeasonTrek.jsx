import React from 'react'
import RotatingPart from "./RotatingPart"
import SeasonTrekInfo from "./SeasonTrekInfo"


const SeasonTrek = () => {
    const seasons = ["Summer", "Monsoon", "Winter"]

    return (
        <div style={{ background: "url('images/BG.jpg')", backgroundSize: "auto 100%", backgroundRepeat: "no-repeat", backgroundPosition: "top right" }}>
            <div className='detailPart'>
                <div id="title" style={{ textShadow: "1px 1px 12.5px black", marginTop: "0%" }}>
                    TrekLicious
                </div>
                <div className='rotatingPartHolder'>
                    <div>for all seasons</div>
                    <div className='rotatingPart'>
                        <RotatingPart descriptions={seasons} />
                    </div>
                </div>
            </div>
            <SeasonTrekInfo />
        </div >
    )
}

export default SeasonTrek