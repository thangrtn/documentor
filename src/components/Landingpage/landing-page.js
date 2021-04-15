import React from 'react'
import './landing-page.css';
import Landingpagelogo from '../../images/arrow-right.svg';


const Landingpage = () => {
    return (
        <div classname="landingpagebox">
            <div>
                <h1 className=" landingtext ">We created to reduce the system of paperwork.</h1>
                <h2 className= "landinginfo">When students complete the form as selected. The system will send documents to the teachers' e-mail 
                                        according to the level. Students can wait to receive feedback by  your email.</h2>
            </div>
            <button className="btn-landingservice" onClick={() => {Landingpage()}} >Service <img className="iconlanding" src={Landingpagelogo} alt="service"/></button> 
            
            
        </div>
    );
}

export default Landingpage;
