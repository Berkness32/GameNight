import { Link } from 'react-router-dom';
import "./Games.css";
import "./CommunityGames.css"

function GameCard({ title, description, image, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="game-card">
      <img src={image} alt={title} className="game-image" />
      <div className="game-info">
        <h2 className="game-title">{title}</h2>
        <p className="board-game-description">{description}</p>
      </div>
    </a>
  );
}

function CommunityGames() {
  return (
    <div className="page-container">
      <h1 className="page-title">Community Games</h1>

      <div className="intro-container">
        <p className="game-description">Below is the list of games that will be available to play on a first-come-first-serve basis. If you wish to play one of these games, just come over and talk the staff working the event.</p>
      </div>
      
      <div className="community-container">
        <GameCard
          title="Catan"
          description="In CATAN (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities and roads. On each turn dice are rolled to determine which resources the island produces. Players build structures by 'spending' resources (sheep, wheat, wood, brick and ore) which are represented by the relevant resource cards; each land type, with the exception of the unproductive desert, produces a specific resource: hills produce brick, forests produce wood, mountains produce ore, fields produce wheat, and pastures produce sheep."
          image="/catan.png"
          href="https://www.youtube.com/watch?v=8Yj0Y3GKE40"
        />
        <GameCard
          title="Codenames"
          description="In Codenames, two teams compete to see who can make contact with all of their agents first. Lay out 25 cards, each bearing a single word. The spymasters look at a card showing the identity of each card, then take turns clueing their teammates. A clue consists of a single word and a number, with the number suggesting how many cards in play have some association to the given clue word. The teammates then identify one agent they think is on their team; if they're correct, they can keep guessing up to one more than the stated number of times; if the agent belongs to the opposing team or is an innocent bystander, the team's turn ends; and if they fingered the assassin, they lose the game."
          image="/codenames.jpg"
          href="https://www.youtube.com/watch?v=zQVHkl8oQEU"
        />
        <GameCard
          title="Splendor"
          description="Splendor is a game of chip-collecting and card development. Players are merchants of the Renaissance trying to buy gem mines, means of transportation, shops—all in order to acquire the most prestige points. If you're wealthy enough, you might even receive a visit from a noble at some point, which of course will further increase your prestige."
          image="/splendor.jpg"
          href="https://www.youtube.com/watch?v=rue8-jvbc9I"
        />
        <GameCard
          title="Love Letter"
          description="Love Letter is a game of risk, deduction, and luck for 2–4 players. Your goal is to get your love letter into Princess Annette's hands while deflecting the letters from competing suitors. From a deck with only sixteen cards, each player starts with only one card in hand; one card is removed from play. On a turn, you draw one card, and play one card, trying to expose others and knock them from the game. Powerful cards lead to early gains, but make you a target. Rely on weaker cards for too long, however, and your letter may be tossed in the fire!"
          image="love-letter.png"
          href="https://www.youtube.com/watch?v=XoorM4kuJqc"
        />
      </div>
    </div>
  );
}

export default CommunityGames;
