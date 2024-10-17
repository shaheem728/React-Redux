import { useState } from 'react';
import './App.css';
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'
import { Route,Routes } from 'react-router-dom';
import Productlist from './components/product list/Productlist';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Productdetail from './components/product detail/Productdetail';
import NotFound from './components/notfound/NotFound';
import Login from './components/login/Login';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container-main">
      <Navbar onOpenModal={() => setShowModal(true)} />
      <div className="contents">
      <Login show={showModal} onClose={() => setShowModal(false)} />        
        <Routes>
          <Route path="/React-Redux" element={<Home />} />
          <Route path='/products' element={<Productlist />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:id' element={<Productdetail/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        
      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default App;