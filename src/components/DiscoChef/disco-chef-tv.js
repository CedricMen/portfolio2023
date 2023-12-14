import React, { useEffect } from 'react';
import './disco-chef-tv.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const DiscoChef = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <div className="discoChef" id="MydiscoChef">
        <section class="intro-projet">
            <div class="image-projet image-projet-6"></div>
            <div class="texte-projet">
                <h1>Disco Chef TV</h1>
                <h2>Blender <span class="texte-alt-color">|</span> Substance Painter <span class="texte-alt-color">|</span> Unity</h2>
                <p>Pour le cours de Production Interactive/Chaos Média notre tache à été de réaliser une expérience/jeux à
                    l'échelle d'une classe. Divisé en département, nous avons réalisé un jeu vidéo culinaire <span class="texte-alt-color">low poly</span> à la manière d'un
                    vrai studio de Jeu. J'ai rejoint le département de 3D pour ce projet. J'ai réalisé la majorité des repas
                    et ingrédients du Jeu. J'ai modélisé tout mes modèles dans <span class="texte-alt-color">Blender</span>, texturiser dans <span class="texte-alt-color">Substance 3D Painter</span> et
                    <span class="texte-alt-color">intégré</span> dans <span class="texte-alt-color">Unity</span>.</p>
                <p>Crédit :</p>
                <p><span class="texte-alt-color">Déléguée de projet</span> : Émilie Pinsonneault-Lysight</p>
                <p><span class="texte-alt-color">Réalisateur vidéo</span> : Frédéric Brisson</p>
                <p><span class="texte-alt-color">Graphistes/designers</span> : Yousaif Dion, Hera-Meilka Gratton, Gabriel Marcoux, Maya Sourdif</p>
                <p><span class="texte-alt-color">Scénaristes</span> : Philippe Lachance-Emond, Amélie Ouellet</p>
                <p><span class="texte-alt-color">Intégratrice</span> Web : Marie-Pier Fleurant</p>
                <p><span class="texte-alt-color">Programmeur</span> : Rémi Therrien, Antoine Guérette, Édouard Jamieson</p>
                <p><span class="texte-alt-color">Modélisateur 3D</span> : Simon-Olivier Desautels, Émilie Bruneault, Nathan Cousineau, <span class="texte-alt-color">Cédric Ménard</span></p>
                <p><span class="texte-alt-color">Tout les Éléments 3D présenté ci-dessous</span> : <span class="texte-alt-color">Cédric Ménard</span></p>

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

        <section class="burger-3d-sketchfab" data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Burger 3D</h1>
            <div class="sketchfab-embed-wrapper">
                <iframe allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen execution-while-not-rendered execution-while-out-of-viewport frameborder="0"
                        mozallowfullscreen="true" src="https://sketchfab.com/models/f79de47dbf794c3b858f8f1743614678/embed?autospin=0&autostart=1&camera=0&preload=1" title="Burger"
                        web-share webkitallowfullscreen="true"
                        xr-spatial-tracking></iframe>
            </div>
        </section>


            <section class="projet-section-slider" data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Repas Low-Poly</h1>
                <div class="flex-slider">
                    <div id="slider">
                        <figure>
                            <div class="modele-brochette"></div>
                            <div class="modele-burger"></div>
                            <div class="modele-croque-monsieur"></div>
                            <div class="modele-steak"></div>
                            <div class="modele-salade"></div>
                        </figure>
                    </div>
                </div>
            </section>

            <section class="projet-section-slider" data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Ingrédients Low-Poly</h1>
                <div class="flex-slider">
                    <div id="slider">
                        <figure>
                            <div class="modele-fromage-nrml"></div>
                            <div class="modele-laitue"></div>
                            <div class="modele-pain"></div>
                            <div class="modele-tomate"></div>
                            <div class="modele-fromage"></div>
                        </figure>
                    </div>
                </div>
            </section>

            <section class="projet-section" data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Modélisation dans Blender</h1>
                <div class="modelisation-blender"></div>
            </section>

            <section class="projet-section" data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Texturisation dans Substance</h1>
                <div class="substance"></div>
            </section>

            <section class="projet-section" data-aos="zoom-in-down" data-aos-duration="1000">
                <h1>Le Jeu</h1>
                <div class="jeu"></div>
            </section>

        </div> 
    );
}

export default DiscoChef