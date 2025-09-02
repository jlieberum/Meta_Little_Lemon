import './App.css';
import greeksalad from './greeksalad.jpg';
import lemon from './lemondessert.jpg';
import bruchetta from './bruchetta.svg';



function Specials() {
  return (
    <div className="specials">
      <section>
        <section className="specialsHeadingContainer">
          <h2>This Weeks Specials</h2>
          <button>Online Menu</button>
        </section>
        <section className="specialsContentContainer">
          <div className="specialsContentBox">
            <img src={greeksalad} alt="Greek Salad" />
            <h5>Greek Salad</h5>
            <h6>$12.99</h6>
            <p>The Famous Greek Salad of crispy lettuce, peppers, olives and our Chicago style Feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div className="specialsContentBox">
            <img src={bruchetta} alt="Bruchetta" />
             <h5>Bruchetta</h5>
            <h6>$5.99</h6>
            <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          </div>
          <div className="specialsContentBox">
            <img src={lemon} alt="Lemon Dessert" />
            <h5>Lemon Dessert</h5>
            <h6>$5.00</h6>
            <p>This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          </div>
        </section>
      </section>

    </div>
  );
}

export default Specials;