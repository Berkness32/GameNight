import { Link } from 'react-router-dom';
import "./Games.css";

function Magic() {
  return (
    <div className="page-container">
      <h1 className="page-title">Magic the Gathering</h1>

      <div className="intro-container">

        <img src="/mtg-wallpaper.jpg" alt="magic" className="wallpaper" />
        <p className="game-description">Magic: The Gathering! is a trading card game where players summon incredible creatures and cast powerful spells to defeat their foes. The game has thousands of cards so you can always find a way to express yourself on the battlefield. </p>

        <div className="button-container">
          <a href="https://magic.wizards.com/en/how-to-play" target="_blank" rel="noreferrer" className="link-button">
            How to Play Magic
          </a>
        </div>
      </div>
    </div>
  );
}

export default Magic;
