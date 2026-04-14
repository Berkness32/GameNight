import { Link } from 'react-router-dom';
import "./Games.css";

function Warhammer() {
  return (
    <div className="page-container">
      <h1 className="page-title">Warhammer 40,000</h1>

      <div className="intro-container">
        <img src="/war-wallpaper.jpg" alt="magic" className="wallpaper" />
        <p className="game-description">Warhammer is a tabletop wargame where two or more players compete against each other with "armies" of 25 mm – 250 mm tall miniatures. The rules of the game have been published in a series of books which describe how to move miniatures around the game surface and simulate combat in a "balanced and fair" manner.</p>

        <div className="button-container">
          <a href="https://start-warhammer.com/" target="_blank" rel="noreferrer" className="link-button">
            How to Play Warhammer 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Warhammer;
