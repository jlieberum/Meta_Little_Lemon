import '../styles.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/aboutpage'><li>About</li></Link>
          <Link to='/menu'><li>Menu</li></Link>
          <Link to='/bookings'><li>Reservations</li></Link>
          <Link to='/order'><li>Order Online</li></Link>
          <Link to='/login'><li>Login</li></Link>
        </ul>
      </nav>

    </div>
  );
}

export default Nav;