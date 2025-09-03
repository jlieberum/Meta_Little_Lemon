import '../styles.css';
import logo from '../assets/FooterLogo.png';

function Footer() {
  return (
    <div className="footer">
      <footer className="footerContainer">
        <section>
          <img src={logo} alt="Little Lemon Restaurant" width="172" height="279" />
        </section>
        <section>
          <h3>Doormat Navigation</h3>
          <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
        </section>

        <section>
          <h3>Contact</h3>
          <p>100 Lemon Lane, Chicago IL 60601</p>
          <p>312-123-4567</p>
        </section>

        <section>
          <h3>Social Media Links</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </section>
      </footer>
    </div>
  );
}

export default Footer;