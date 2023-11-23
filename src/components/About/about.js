import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className="about" id="about">
            <h1 class="titre-page">À propos</h1>
            <section class="a-propos">
                <div class="a-propos-sideA">
                    <div class="texte-propos">
                        <p><span class="texte-alt-color">Prêt au poste!</span></p>
                        <p>Je suis toujours ouvert pour apprendre de nouvelles choses et j’aime mettre ma touche personnelle à tous
                            projets. </p>
                        <p>Mon côté <span class="texte-alt-color">pragmatique</span> et <span
                            class="texte-alt-color">polyvalent</span> n’équivaut que mon envie d'accroître constamment mes
                            connaissances dans les
                            domaines suivant :</p>
                        <ul>
                            <li>Développement Front-End</li>
                            <li>Utilisation de Cms et de PHP</li>
                            <li>Création d’expérience intéractive</li>
                            <li>Prototypage</li>
                            <li>Modélisation/Animation 3D</li>
                        </ul>
                    </div>
                </div>
                <div class="a-propos-sideB">
                    <a href="" id="survole-qualite">
                        <div class="photo-cercle">
                            <div class="photo-cedric" alt="photo-de-cedric-menard"></div>
                        </div>
                    </a>
                    <div id="bulle-qualite">
                        <div class="qualite-1"><p>Organisé</p></div>
                        <div class="qualite-2"><p>Pragmatique</p></div>
                        <div class="qualite-3"><p>Polyvalent</p></div>
                    </div>
                </div>

            </section>
            <div class="boiteSouris">
                <div class="souris">
                    <div class="roue"></div>
                </div>
            </div>
            <section class="competences">

                <h1 class="titre-page">Mes compétences</h1>
                <div class="comp-grid">
                    <div class="comp-1"
                        data-aos="zoom-in-right" data-aos-offset="400">
                        <a href="">
                            <div class="img-comp-1"></div>
                        </a>
                        <p>Pour mes projets <span class="texte-alt2-color">front-end</span>, il me faut évidemment utiliser <span
                            class="texte-alt2-color">Webstorm</span> pour faire du <span
                                class="texte-alt2-color">HTML/CSS</span> pour créer un
                            code de qualité.</p>
                    </div>
                    <div class="comp-2"
                        data-aos="zoom-in-left" data-aos-offset="400">
                        <p>J’aime travailler avec <span class="texte-alt2-color">Figma</span> pour le <span
                            class="texte-alt2-color">prototypage</span> et <span class="texte-alt2-color">Photoshop</span> pour
                            optimiser les images que je
                            mets dans mes prototypes</p>
                        <a href="">
                            <div class="img-comp-2"></div>
                        </a>
                    </div>
                    <div class="comp-3"
                        data-aos="zoom-in-right" data-aos-offset="400">
                        <a href="">
                            <div class="img-comp-3"></div>
                        </a>
                        <p>Pour le <span class="texte-alt2-color">Back-end</span> j’utilise <span
                            class="texte-alt2-color">WordPress</span> et PHP pour l’adaptation du HTML/CSS et l’utilisation
                            d’<span class="texte-alt2-color">ACF</span> et de
                            <span class="texte-alt2-color">CPT</span></p>
                    </div>
                    <div class="comp-4"
                        data-aos="zoom-in-left" data-aos-offset="400">
                        <p>Pour créer des <span class="texte-alt2-color">expériences</span> interactives intéressantes, je me sers
                            de <span class="texte-alt2-color">Unity</span>, <span class="texte-alt2-color">Blender</span> et <span
                                class="texte-alt2-color">TouchDesigner</span></p>
                        <a href="">
                            <div class="img-comp-4"></div>
                        </a>
                    </div>
                </div>
            </section>
            <section class="interets">
                <h1 class="titre-page">Mes Intérêts</h1>
                <div class="interet-grid">
                    <div class="texte-interet"
                        data-aos="fade-up" data-aos-duration="3000">
                        <p>Je suis professionnellement et personnellement <span class="texte-alt2-color">multidisciplinaire</span>,
                            je fais de l’escalade, je suis
                            cinéphile,
                            mélomane, gamer et artiste. Malgré mon côté développeur, j’aime faire dans mon temps libre de la <span
                                class="texte-alt2-color">3D</span> dans
                            <span class="texte-alt2-color">Blender</span> et du montage <span class="texte-alt2-color">vidéo</span>
                            et <span class="texte-alt2-color">sonore</span> avec <span class="texte-alt2-color">Premiere</span> et
                            <span class="texte-alt2-color">Audition</span>.
                        </p>
                        <p>La <span class="texte-alt2-color">musique</span> joue un rôle important pour moi, surtout celle des
                            années <span class="texte-alt2-color">70s</span> et <span class="texte-alt2-color">80s</span>. Il est
                            rare de me
                            voir
                            sans écouteurs quand je travaille. C’est ma source d’inspiration et l’essence qui me rend <span
                                class="texte-alt2-color">productifs</span> et
                            <span class="texte-alt2-color">créatifs</span>.</p>
                    </div>
                    <div class="imgs-interets"
                        data-aos="fade-up" data-aos-duration="4000">
                        <div class="img-interets-1"></div>
                        <div class="img-interets-2"></div>
                        <div class="img-interets-3"></div>
                        <div class="img-interets-4"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About