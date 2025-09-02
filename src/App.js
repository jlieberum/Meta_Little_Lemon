import './styles.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './footer';

function App() {
  return (
    <>
      <div className="layoutContainer">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>

    </>
  );
}

export default App;
