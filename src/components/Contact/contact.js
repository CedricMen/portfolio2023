import React from 'react';
import './contact.css'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Contact = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    
    <div className="contact" id="contact">
      <section class="contact-section" id="section-contact">
        <div class="grid-contact">
          <div class="info-contact">
            <h2>Contact: <br /> <span class="texte-alt-color"><a class="mail" href="mailto:cedricmenard1@gmail.com">cedricmenard1@gmail.com</a></span></h2>
            <h2>Téléphone: <br /> <span class="texte-alt-color">+1 (438)-399-8349</span></h2>
            <div class="cv-btn">
              <a download href="/Cedric_Menard_CV___FR.pdf"><button type="button">Voir mon CV</button></a>
            </div>
            <div class="sociaux">
              <a href="https://www.linkedin.com/in/c%C3%A9dric-m%C3%A9nard-40ab621a8/" target="_blank" rel="noopener noreferrer"><i
                class="fab fa-linkedin"></i></a>
              <a href="https://www.youtube.com/channel/UC4ELHn9lArnMBaZl6ErUjHg/" target="_blank" rel="noopener noreferrer"><i
                class="fab fa-youtube-square"></i></a>
              <a href="https://github.com/CedricMen" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              <a href="https://sketchfab.com/cedricmenard" target="_blank" rel="noopener noreferrer"><div class="ico-sketchfab"></div></a>
            </div>
          </div>
          <div class="formulaire-contact">
            <a href="mailto:cedricmenard1@gmail.com"> </a>
          </div>
        </div>
      </section>
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 20,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.3,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#FFF47D",
                    },
                    links: {
                        color: "#FFF47D",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    </div>
  )
}


export default Contact