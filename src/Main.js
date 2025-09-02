import './styles.css';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Hero from './Hero';

function Main() {
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

export default Main;