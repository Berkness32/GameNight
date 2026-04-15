import { Link } from 'react-router-dom';
import "./Games.css";

function LocalStores() {
  return (
    <div className="page-container">
      <h1 className="page-title">Local Stores</h1>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1jVYW3Xvod7MEiCLkiXc6U9NdxQLeIGw&ehbc=2E312F&noprof=1" 
          width="95%"
          height="500"
          style={{ border: 0 }}
          title="Comic Book Stores"
        >
        </iframe>
      </div>
    </div>
  );
}

export default LocalStores;
