import './styles.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import Bookings from './pages/Bookings';
import Aboutpage from './pages/Aboutpage';
import LoginPage from './pages/Login';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Footer from './components/footer';
import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="layoutContainer">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/aboutpage' element={<Aboutpage />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/order' element={<Order />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
