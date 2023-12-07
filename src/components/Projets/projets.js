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
                    <a href="course-lumiere.html" class="course-lumiere"></a>
                </div>
                <div class="projet-b"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>WordPress | HTML/CSS/JS</p>
                        <h2>Refonte d’un Site</h2>
                        <p>Projet Scolaire</p>
                        <a href="refonte-site.html">
                            <button type="button">Voir le projet</button>
                        </a>
                    </div>
                    <a href="refonte-site.html" class="refonte"></a>
                </div>

                <div class="projet-c"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>Figma | Expérience Intéractive</p>
                        <h2>Verum</h2>
                        <p>Projet Scolaire</p>
                        <a href="verum.html">
                            <button type="button">Voir le projet</button>
                        </a>
                    </div>
                    <a href="verum.html" class="verum"></a>
                </div>

                <div class="projet-d"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>WordPress | WooCommerce</p>
                        <h2>Site eCommerce</h2>
                        <p>Projet Scolaire</p>
                        <a href="site-ecommerce.html">
                            <button type="button">Voir le projet</button>
                        </a>
                    </div>
                    <a href="site-ecommerce.html" class="ecommerce"></a>
                </div>

                <div class="projet-e"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>Blender | Projection Mapping</p>
                        <h2>Grosse Citrouille</h2>
                        <p>Projet Scolaire</p>
                        <a href="projection-mapping.html">
                            <button type="button">Voir le projet</button>
                        </a>
                    </div>
                    <a href="projection-mapping.html" class="mapping"></a>
                </div>

                <div class="projet-f"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine" data-aos-offset="400">
                    <div class="bulle">
                        <p>3D | Jeux Vidéo</p>
                        <h2>Disco Chef TV</h2>
                        <p>Projet Scolaire</p>
                        <a href="disco-chef-tv.html">
                            <button type="button">Voir le projet</button>
                        </a>
                    </div>
                    <a href="disco-chef-tv.html" class="disco"></a>
                </div>

            </section>
        </div>
    );
}

export default Projets