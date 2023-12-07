import React, { useEffect } from 'react';
import './refonte-site.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Refonte = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="refonteSite" id="MyRefonteSite">
            
        </div> 
    );
}

export default Refonte