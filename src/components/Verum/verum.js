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
        <section class="intro-projet">
            <div class="image-projet"></div>
            <div class="texte-projet">
                <h1>Verum</h1>
                <h2>Figma <span class="texte-alt-color">|</span> Expérience Intéractive</h2>
                <p>Une <span class="texte-alt-color">Expérience interactive</span> testant les connaissances sur la <span
                        class="texte-alt-color">désinformation</span>. Le principle est simple, des situations possibles sont
                    présentées et le but est de deviner si c’est un <span
                            class="texte-alt-color">vrai ou une fausse nouvelle</span>. Ce projet a été réalisé dans le cadre de
                    mon cours ‘Design d’expérience’. Ce projet était un travail en <span
                            class="texte-alt-color">équipe de 4</span>, j’ai légèrement participé au design (boussole) et fais
                    la majorité du <span class="texte-alt-color">protypage</span> dans figma.</p>
                <p>Crédit : Programmation/Prototypage : <span class="texte-alt-color">Cédric Ménard</span></p>

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

        <section class="figma-verum"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <iframe allowfullscreen
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBVnoaDnzV8xjXX67hZokVQ%2FTP3-Gabarit-de-d%C3%A9part-Copy-Copy%3Fnode-id%3D671%253A102600%26scaling%3Dscale-down-width%26page-id%3D2%253A4%26starting-point-node-id%3D673%253A15643"></iframe>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Esquisse Prototype</h1>
            <div class="prototype-sketch"></div>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Premier Prototype</h1>
            <div class="prototype-lo-fi"></div>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Prototype Avancé</h1>
            <div class="prototype-hi-fi"></div>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Prototype Final</h1>
            <div class="prototype-final"></div>
        </section>
        </div> 
    );
}

export default Verum