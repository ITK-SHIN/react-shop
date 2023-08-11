import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accessory from './pages/Accessory';

import Fashion from './pages/Fashion';
import Home from './pages/Home';

import Digital from './pages/Digital';
import CommonHeader from './CommonHeader';
import Cart from './pages/Cart';

import data from './data.js';

function App() {
  return (
    <Routes>
      <Route element={<CommonHeader />}>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
