import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="page-title">Game Night</h1>
      <h2 className="page-subtitle">Starting May 5th at Burton Chace Park in the Community Room</h2>

      <div>
        <p className="description">
          Game Night is a free, indoor community event held at Burton Chace 
          Park featuring Magic the Gathering matches, Warhammer 40K, and a few tables
          dedicated to "bring your own board game". Guests will need to bring 
          their own cards and gear, however, we will have a few community board 
          games for guests to use on a first-come-first-serve basis. Check out 
          the community games link below to learn more about what we have to 
          offer. Also, if you don't have your own cards or gear, the local stores 
          link would be a good place to start.
        </p>
      </div>

      {/* Section 1 - Main Pages */}
      <div className="grid-section">
        <div className="grid">
          <Link to="/community-games" className="grid-button">Community Games</Link>
          <Link to="/local-stores" className="grid-button">Local Stores</Link>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Section 2 - Getting Started */}
      <div className="grid-section">
        <h2 className="section-title">Getting Started</h2>
        <div className="grid">
          <Link to="/magic" className="grid-button">Magic</Link>
          <Link to="/warhammer" className="grid-button">Warhammer</Link>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Section 3 - Calendar */}
      <div className="grid-section">
        <h2 className="section-title">Event Calendar</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=592677ede656c66e4e12fe5db0d95ed37cdb0203838e69b47ee1c0835f29d129%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=AGENDA"
          style={{ border: 0 }}
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="no"
          title="Game Night Calendar"
        />
      </div>

    </div>
  );
}

export default Home;
