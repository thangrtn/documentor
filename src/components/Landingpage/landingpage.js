import React from 'react'
import './landingpage.css';
import Landingpagelogo from '../../images/arrow-right.svg';
import { Link } from 'react-router-dom';

const Landingpage = () => {
    return (
        <div classname="landingpagebox">
            <div>
                <h1 className=" landingtext ">We created to reduce the system of paperwork.</h1>
                <h2 className= "landinginfo">When students complete the form as selected. The system will send documents to the teachers' e-mail 
                                        according to the level. Students can wait to receive feedback by  your email.</h2>
            </div>
            <Link to="/services">
                <button className="btn-landingservice" >Service <img className="iconlanding" src={Landingpagelogo} alt="service"/></button> 
            </Link>

        </div>
       


    );

}

export default Landingpage;