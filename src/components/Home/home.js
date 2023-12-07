import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <div className="home" id="myHome">
      <div class="index-body">
        <section class="video-demo-bg">
          <iframe width="1920" height="1080" src="https://www.youtube.com/embed/DgWK_0XYESo?autoplay=1&loop=1&playlist=DgWK_0XYESo&mute=1&controls=0" title="YouTube video player"
            frameborder="0" allow="autoplay; picture-in-picture;" allowfullscreen></iframe>
        </section>
        <section class="hero">
          <div class="banderolle">
            <h1>Cédric Ménard</h1>
            <p>Développeur Web <span class="texte-alt-color">& </span>
              Créateur média</p>
            <Link to='/projets'><button type="button">Voir mes projets</button></Link>
          </div>
        </section>
      </div>
    </div>
  )
}



export default Home







