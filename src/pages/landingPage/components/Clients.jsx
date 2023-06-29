import React from 'react'
import ClientTestimonials from './ClientTestimonials';

const Clients = () => {
    return (
        <>
            <div style={{ color: "black" }}>
                <div id="title" style={{ textShadow: "1px 1px 12.5px black", marginTop: window.innerWidth > 1023 ? "0.5%" : "10%" }}>
                    TrekLicious
                </div>
                <div className='rotatingPartHolder'>
                    <div>for all!</div>
                </div>
                <ClientTestimonials />
            </div>
        </>
    )
}

export default Clients