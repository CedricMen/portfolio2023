import React, { useEffect } from 'react';
import './site-ecommerce.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Ecommerce = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <div className="ProjetEcommerce" id="MyProjetEcommerce">
                    
        <section class="intro-projet">
            <div class="image-projet image-projet-4"></div>
            <div class="texte-projet">
                <h1>Site eCommerce</h1>
                <h2>WordPress <span class="texte-alt-color">|</span> WooCommerce</h2>
                <p>Un site <span class="texte-alt-color">eCommerce</span> utilisant une plateforme de paiement <span
                        class="texte-alt-color">Stripe</span> et <span class="texte-alt-color">Paypal</span>. Ce travail était
                    principalement du
                    <span class="texte-alt-color">back-end</span> et l’introduction pour nous aux <span class="texte-alt-color">plateformes de paiements</span>.
                    Pour cela nous avons utilisé le plug-in
                    <span class="texte-alt-color">Woo Commerce</span>. Ce projet a été réalisé dans le cadre de mon cours
                    ‘Production Web'. Pour ce projet
                    l’utilisation d’un thème existant était requise, j’ai tout de même utilisé du <span class="texte-alt-color">CSS</span>
                    directement dans WordPress
                    pour modifier la mise en forme et donner un résultat qui me convenait. Le site est également <span
                            class="texte-alt-color">responsive</span>.</p>
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
                            <div class="titre-logo-projet-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="single-voir-site"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <a href="https://cmenard.dectim.ca/TechTim/" target="_blank"><div class="image-ecommerce"><h1>Voir le Site</h1></div></a>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Mise en place du <span class="texte-alt-color">code promo</span> avec WooCommerce</h1>
            <div class="techtim-code"></div>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Création d’un <span class="texte-alt-color">inventaire</span> de boutique WooCommerce</h1>
            <div class="techtim-produits"></div>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Boutique avec <span class="texte-alt-color">catégories</span></h1>
            <div class="techtim-categories"></div>
        </section>

        <section class="projet-section"
                data-aos="zoom-in-down" data-aos-duration="1000">
            <h1>Variation pour un <span class="texte-alt-color">produit</span></h1>
            <div class="techtim-variation"></div>
        </section>

        </div> 
    );
}

export default Ecommerce