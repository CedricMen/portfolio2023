import React, { useEffect } from 'react';
import './refonte-site.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Refonte = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <div className="refonteSite" id="MyRefonteSite">
        <section class="intro-projet">
            <div class="image-projet image-projet-2"></div>
            <div class="texte-projet">
                <h1>Refonte d’un site</h1>
                <h2>WordPress <span class="texte-alt-color">|</span> HTML/CSS/JS</h2>
                <p>La <span class="texte-alt-color">refonte</span> d’un site complet existant. La <span class="texte-alt-color">pourvoirie boismenu</span>
                    avait un site non fonctionnel, des icônes
                    invisibles. J’ai refait le site tout en respectant leur <span
                            class="texte-alt-color">direction artistique</span> et leurs <span class="texte-alt-color">fonctionnalités</span>.
                    Ce projet a été réalisé dans le cadre de mon cours ‘Production Web'. Pour la programmation j’ai utilisé
                    <span class="texte-alt-color">HTML/CSS/JS</span>, puis <span class="texte-alt-color">PHP</span> pour
                    l’intégrer dans <span class="texte-alt-color">WordPress</span>.</p>
                <p>Crédit : <span class="texte-alt-color">Cédric Ménard</span></p>
                <div class="logiciels-competences-projet">
                    <div class="un-logiciel">
                        <h2>Logiciels</h2>
                        <div class="flex-logiciels">
                            <div class="titre-logo-projet-1"></div>
                            <div class="titre-logo-projet-2"></div>
                            <div class="titre-logo-projet-3"></div>
                        </div>
                    </div>
                    <div class="une-competence">
                        <h2>Compétences</h2>
                        <div class="flex-competences">
                            <div class="titre-logo-projet-4"></div>
                            <div class="titre-logo-projet-5"></div>
                            <div class="titre-logo-projet-6"></div>
                            <div class="titre-logo-projet-7"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="single-demo-video"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Vidéo Démo</h1>
            <iframe src="https://www.youtube.com/embed/kWp3R5SsEJE?autoplay=1&loop=1&playlist=kWp3R5SsEJE&mute=1&controls=1"></iframe>
        </section>
        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Programmation <span class="texte-alt-color">Front-Page</span></h1>
            <div class="refonte-site-programmation"></div>
        </section>
        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Programmation <span class="texte-alt-color">ACF</span></h1>
            <div class="refonte-site-programmation-2"></div>
        </section>
        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Programmation <span class="texte-alt-color">CPT</span></h1>
            <div class="refonte-site-programmation-3"></div>
        </section>
        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Utilisation de <span class="texte-alt-color">GitHub</span></h1>
            <div class="refonte-site-programmation-4"></div>
        </section>
        </div> 
    );
}

export default Refonte