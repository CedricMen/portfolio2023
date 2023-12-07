import React, { useEffect } from 'react';
import './disco-chef-tv.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const DiscoChef = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="discoChef" id="MydiscoChef">
            
        </div> 
    );
}

export default DiscoChef