import React, { useEffect } from 'react';
import './projection-mapping.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectionMapping = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <div className="ProjectionMapping" id="MyProjectionMapping">
        <section class="intro-projet">
            <div class="image-projet image-projet-5"></div>
            <div class="texte-projet">
                <h1>Projection mapping</h1>
                <h2>Blender <span class="texte-alt-color">|</span> fSpy</h2>
                <p>Un court film de 15 secondes utilisant une technique pour projeter une <span class="texte-alt-color">image 2D</span> sur des éléments modélisés
                    par moi-même en <span class="texte-alt-color">3D</span>. Ce projet a été réalisé dans le cadre de mon cours ‘Production Numérique'. Pour ce
                    projet j’ai entièrement utilisé <span class="texte-alt-color">Blender</span> pour la <span class="texte-alt-color">modélisation</span> et l’<span class="texte-alt-color">animation</span> et pour la <span class="texte-alt-color">projection</span> j’ai
                    utilisé l'add-on <span class="texte-alt-color">fspy</span> qui fonctionne en relation avec Blender pour appliquer la <span class="texte-alt-color">texture</span> avec la caméra à
                    l’environnement grace à des <span class="texte-alt-color">points de fuites</span>.</p>
                <p>Crédit : <span class="texte-alt-color">Cédric Ménard</span></p>

                <div class="logiciels-competences-projet">
                    <div class="un-logiciel">
                        <h2>Logiciels</h2>
                        <div class="flex-logiciels">
                            <div class="titre-logo-projet-1"></div>
                        </div>
                    </div>
                    <div class="une-competence">
                        <h2>Compétences</h2>
                        <div class="flex-competences">
                            <div class="titre-logo-projet-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="single-demo-video"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Vidéo</h1>
            <iframe src="https://www.youtube.com/embed/VudxJOESfFM?autoplay=1&loop=1&playlist=VudxJOESfFM&mute=1&controls=1"></iframe>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Image originale</h1>
            <div class="photo-ruelle"></div>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Le décor</h1>
            <div class="decor-3d-dans-blender"></div>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>La scène</h1>
            <div class="scene-3d-dans-blender"></div>
        </section>
        </div> 
    );
}

export default ProjectionMapping