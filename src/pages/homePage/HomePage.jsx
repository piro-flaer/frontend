import React from 'react';
import Header from './components/jsx/Header';
import MainDiv from './components/jsx/MainDiv';
import RestBody from './components/jsx/RestBody';

const HomePage = () => {
    return (
        <>
            <Header />
            <MainDiv />
            <div style={{ position: 'absolute', top: "90vh" }}>
                <RestBody />
            </div>
        </>
    )
}

export default HomePage