import '../styles.css';

function Testimonials() {
  return (
    <div className="testimonials">
      <section>
        <section className="testimonialsHeadingContainer">
          <h2>Testimonials</h2>
        </section>

        <section className="testimonialsContentContainer">
          <div className="testimonialsContentBox">
                      <h5>Bob Smith</h5>
                      <h6>5/5</h6>
                      <p>Me and my wife both enjoyed this restaurant. They had a great Greek Salad and the Lemon Dessert was amazing. Highly recommend.</p>
                    </div>
                    <div className="testimonialsContentBox">
                       <h5>Barb Rivers</h5>
                      <h6>5/5</h6>
                      <p>The Bruchetta was so good! Our waitress came regularly to check to see if we needed anything. I was too full to get any dessert, but they looked amazing. I can't wait to come back!</p>
                    </div>
                    <div className="testimonialsContentBox">
                      <h5>Denny Woods</h5>
                      <h6>5/5</h6>
                      <p>By far my favorite restaurant in the Chicago area. There are no bad menu items and the service is always top tier. Would recommend to anyone looking for a new restaurant to try.</p>
                    </div>
        </section>
      </section>
    </div>
  );
}

export default Testimonials;