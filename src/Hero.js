import './styles.css';
import restaurantDish from './restaurantfood.jpg';

function Card() {
  return (
    <div className="heroContainer">
      <section className="heroContent">
        <div><h2>Little Lemon</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
            The restaurant features a locally sourced menu with daily specials.
          </p>
          <button>Reserve a Table</button>
        </div>
      </section>


      <section className="heroImg">
        <img src={restaurantDish} alt='A delicious dish that is offered at the Little Lemon Restaurant' width="250" />
      </section>

    </div>
  );
}

export default Card;