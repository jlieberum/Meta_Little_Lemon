import '../styles.css';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Hero from '../components/Hero';

function Homepage() {
  return (
    <div className="main">
      <main>
        <section>
          <Hero />
        </section>
        <div className="cardContainer">
          <div className="specials"> <section>
            <Specials />
          </section>
          </div>
          <div className="testimonials"><section>
            <Testimonials />
          </section>
          </div>
          <div className="about"><section>
            <About />
          </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;