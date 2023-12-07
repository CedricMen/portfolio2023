import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projets.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projets = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="projets" id="myProjets">
            <h1 class="titre-page">Projets</h1>
            <section class="projets">

                <div class="projet-a"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>Touch Designer | Jeu</p>
                        <h2>Course Lumière</h2>
                        <p>Projet Scolaire</p>
                        <Link to="/course-lumiere">
                            <button type="button">Voir le projet</button>
                        </Link>
                    </div>
                    <Link to="/course-lumiere" class="course-lumiere"></Link>
                </div>
                <div class="projet-b"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>WordPress | HTML/CSS/JS</p>
                        <h2>Refonte d’un Site</h2>
                        <p>Projet Scolaire</p>
                        <Link to="/refonte-site">
                            <button type="button">Voir le projet</button>
                        </Link>
                    </div>
                    <Link to="/refonte-site" class="refonte"></Link>
                </div>

                <div class="projet-c"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>Figma | Expérience Intéractive</p>
                        <h2>Verum</h2>
                        <p>Projet Scolaire</p>
                        <Link to="/verum">
                            <button type="button">Voir le projet</button>
                        </Link>
                    </div>
                    <Link to="/verum" class="verum"></Link>
                </div>

                <div class="projet-d"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>WordPress | WooCommerce</p>
                        <h2>Site eCommerce</h2>
                        <p>Projet Scolaire</p>
                        <Link to="/site-ecommerce">
                            <button type="button">Voir le projet</button>
                        </Link>
                    </div>
                    <Link to="/site-ecommerce" class="ecommerce"></Link>
                </div>

                <div class="projet-e"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>Blender | Projection Mapping</p>
                        <h2>Grosse Citrouille</h2>
                        <p>Projet Scolaire</p>
                        <Link to="/projection-mapping">
                            <button type="button">Voir le projet</button>
                        </Link>
                    </div>
                    <Link to="/projection-mapping" class="mapping"></Link>
                </div>

                <div class="projet-f"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>3D | Jeux Vidéo</p>
                        <h2>Disco Chef TV</h2>
                        <p>Projet Scolaire</p>
                        <Link to="/disco-chef-tv">
                            <button type="button">Voir le projet</button>
                        </Link>
                    </div>
                    <Link to="/disco-chef-tv" class="disco"></Link>
                </div>

            </section>
        </div>
    );
}

export default Projets