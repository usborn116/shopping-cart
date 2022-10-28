import { Link } from 'react-router-dom';
import '../App.css'

function Nav() {
  return (
    <div className="App">
      <ul>
      <li><Link to='/home'>Home</Link></li>
      <li> </li>
      <li><Link to='/cart'>Cart</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
