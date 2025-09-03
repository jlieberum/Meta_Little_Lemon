import Owners from '../assets/Mario_Adrian1.jpg';
import '../styles.css';

function About() {
  return (
    <div className="about">
      <section className="aboutContainer">
          <section className="aboutContent">
            <h2>Little Lemon</h2>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </section>

          <section className="aboutImg">
            <img src={Owners} alt='Mario and Adrian are the owners of the Little Lemon Restaurant.' width='276' height='338' />
          </section>
      </section>
    </div>
  );
}

export default About;