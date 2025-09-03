import logo from '../assets/logo.svg';
import '../styles.css';

function Header() {
  return (
    <div className="logo">
    <header>
      <img src={logo} alt='Little Lemon Restaurant' />
    </header>
    
    </div>
  );
}

export default Header;