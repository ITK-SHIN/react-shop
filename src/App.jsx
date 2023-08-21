import './App.css';
import { Route, Routes } from 'react-router-dom';

import CommonHeader from './CommonHeader';

import Home from './pages/Home';
import Accessory from './pages/Accessory';
import Digital from './pages/Digital';
import Cart from './pages/Cart';
import Fassion from './pages/Fassion';
import NoPage from './pages/NoPage';

import ProductDetail from './components/productDetail';
import { dataFassion, dataDigital, dataAccessory } from './data';
import { useState } from 'react';
import Footer from './pages/Footer';

function App() {
  let [clothes] = useState(dataFassion);
  let [digital] = useState(dataDigital);
  let [accessory] = useState(dataAccessory);

  return (
    <Routes>
      <Route element={<CommonHeader clothes={clothes} digital={digital} accessory={accessory} />}>
        <Route element={<Footer />}>
          <Route path="/" element={<Home clothes={clothes} digital={digital} accessory={accessory} />} />
          <Route path="/fassion" element={<Fassion data={clothes} />}>
            {/*   <Route path="/fassion/:id" element={<ProductDetail data={clothes} />} /> */}
          </Route>
          <Route path="/accessory" element={<Accessory data={accessory} />} />
          <Route path="/digital" element={<Digital data={digital} />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product/:id"
            element={<ProductDetail clothes={clothes} digital={digital} accessory={accessory} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
