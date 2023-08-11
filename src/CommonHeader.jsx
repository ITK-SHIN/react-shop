import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FaLightbulb, FaRegLightbulb, FaCartShopping } from 'react-icons/fa6';
const CommonHeader = () => {
  return (
    <header className="CommonHeader">
      <div className="header">
        <h1 className="title">
          <Link to="/">React Shop</Link>
        </h1>

        <ul className="item">
          <li className="item-list">
            <Link to="/fashion">패션</Link>
          </li>
          <li className="item-list">
            <Link to="/accessory">액세서리</Link>
          </li>
          <li className="item-list">
            <Link to="/digital">디지털</Link>
          </li>
        </ul>

        <div>
          <button>
            <FaLightbulb />
            <FaRegLightbulb />
          </button>
          <input type="text" placeholder="검색" />
          <button>
            <Link to="/cart">장바구니</Link>
            <FaCartShopping />
          </button>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </header>
  );
};

export default CommonHeader;
