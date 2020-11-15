import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/New">New Message</Link>
      <Link to="/">Home</Link>

    </div>
  );
}

export default App;
