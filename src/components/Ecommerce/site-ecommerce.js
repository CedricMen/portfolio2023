import React, { useEffect } from 'react';
import './site-ecommerce.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Ecommerce = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="ProjetEcommerce" id="MyProjetEcommerce">
            
        </div> 
    );
}

export default Ecommerce