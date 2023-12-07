import React, { useEffect } from 'react';
import './course-lumiere.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CourseLumiere = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
            <div className="courseLumiere" id="MaCourseLumiere">    
            <section class="intro-projet">
                <div class="image-projet"></div>
                <div class="texte-projet">
                    <h1>Course Lumière</h1>
                    <h2>Touch Designer <span class="texte-alt-color">|</span> Jeu</h2>
                    <p>Un petit <span class="texte-alt-color">jeu de courses expérimentales</span> créées dans <span
                            class="texte-alt-color">Touch Designer</span>, malgré la nouveauté du logiciel, j’ai
                        réalisé un petit jeu de courses qui ce contrôle avec un mobile. Ce projet était un défi, car aucun jeu du
                        genre n’a vraiment été fait auparavant dans ce logiciel. Ce projet a été réalisé dans le cadre de mon cours
                        ‘Média Interactif IV'. Pour la programmation, j’ai utilisé la <span
                                class="texte-alt-color">programmation</span> de type ‘<span class="texte-alt-color">noeud</span>’ de
                        Touch
                        Designer et j’ai tout modélisé les élément 3D
                        avec <span class="texte-alt-color">Blender</span>.</p>
                    <p>Crédit : <span class="texte-alt-color">Cédric Ménard</span></p>

                    <div class="logiciels-competences-projet">
                        <div class="un-logiciel">
                            <h2>Logiciels</h2>
                            <div class="flex-logiciels">
                                <div class="titre-logo-projet-1"></div>
                                <div class="titre-logo-projet-2"></div>
                            </div>
                        </div>
                        <div class="une-competence">
                            <h2>Compétences</h2>
                            <div class="flex-competences">
                                <div class="titre-logo-projet-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="single-demo-video"
                    data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Vidéo Démo</h1>
                <iframe src="https://www.youtube.com/embed/5W9M3tTiSGw?autoplay=1&loop=1&playlist=5W9M3tTiSGw&mute=1&controls=1"></iframe>
            </section>

            <section class="projet-section"
                    data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Programmation en <span class="texte-alt-color">noeud</span></h1>
                <div class="course-programmation"></div>
            </section>

            <section class="projet-section-slider"
                    data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Modélisation de la voiture</h1>
                <div class="flex-slider">
                    <div id="slider">
                        <figure>
                            <div class="modele-voiture-sans-texture"></div>
                            <div class="modele-voiture-avec-texture"></div>
                            <div class="modele-voiture-rendu-final"></div>
                            <div class="modele-voiture-rendu-final-acceuil"></div>
                            <div class="modele-voiture-sans-texture"></div>
                        </figure>
                    </div>
                </div>
            </section>
            <section class="projet-section"
                    data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Modélisation du sol</h1>
                <div class="course-sol-3d"></div>
            </section>
       </div> 
    );
}

export default CourseLumiere