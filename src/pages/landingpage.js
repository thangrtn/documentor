import React from 'react'
import {ReactComponent as ReactLogo} from '../images/landingpage.svg';

import Landingpage from '../components/Landingpage/landingpage.js';
import '../components/Landingpage/landingpage.css'

const landingpage = () => {
    return (
        <div>
            <ReactLogo />
            <Landingpage />
        </div>
    )
}

export default landingpage;
