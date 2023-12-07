import React, { useEffect } from 'react';
import './verum.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Verum = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="ProjetVerum" id="MyProjetVerum">
            
        </div> 
    );
}

export default Verum