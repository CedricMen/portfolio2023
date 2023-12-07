import React, { useEffect } from 'react';
import './projection-mapping.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectionMapping = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="ProjectionMapping" id="MyProjectionMapping">
            
        </div> 
    );
}

export default ProjectionMapping