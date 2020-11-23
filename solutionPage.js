import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './header';
import ReactForm from './reactform';
import Map from './ReactMap';
// import db from '';

function Solution() {
    return (
        <>
            <HeaderComponent />
            <div className="content">
                <div className="content-compartment-1">
                    <div id="reactformcomp">{<ReactForm />}</div>
                </div>
                <div className="content-compartment-2">
                    <div>{<Map/>}</div>
                </div>
            </div>
        </>
    )
}



export default Solution;
