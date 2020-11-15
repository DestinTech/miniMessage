import './App.css';
import {Link} from 'react-router-dom';

function New() {
  return (
    <div className="New">
      <Link to="/New">New Mesage</Link>
      <Link to="/">Home</Link>
      <p>new Message</p>
    </div>
  );
}

export default New;
