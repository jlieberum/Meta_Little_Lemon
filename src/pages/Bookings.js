import '../styles.css';
import Hero from '../components/Hero';
import About from '../components/About';

function Bookings() {
  return (
    <div className="main">
      <main>
        <section>
          <Hero />
        </section>
        <div className="about"><section>
            <About />
          </section>
          </div>
      </main>
    </div>
  );
}

export default Bookings;