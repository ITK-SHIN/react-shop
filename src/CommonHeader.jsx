import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
/* 
import { FaRegMoon, FaCartShopping, FaBars } from 'react-icons/fa6'; */
import { BsSun } from 'react-icons/bs';

import { FaRegMoon, FaCartPlus, FaBars } from 'react-icons/fa';

const CommonHeader = () => {
  return (
    <>
      <header className="CommonHeader">
        <div className="header">
          <label className="hidden">{CustomFaBars}</label>
          <div></div>
          <h1 className="title">
            <Link to="/" className="mainTitle">
              React Shop
            </Link>
          </h1>

          <ul className="item">
            <li className="item-list">
              <Link to="/fassion" className="link">
                패션
              </Link>
            </li>
            <li className="item-list">
              <Link to="/accessory" className="link">
                액세서리
              </Link>
            </li>
            <li className="item-list">
              <Link to="/digital" className="link">
                디지털
              </Link>
            </li>
          </ul>

          <div className="sidebar">
            <label htmlFor="" className="swap">
              <input type="checkbox" className="js-theme" />
              {CustomBsSun}
              {CustomFaRegMoon}
            </label>

            <input type="text" placeholder="검색" />

            <Link to="/cart">{CustomaCartShopping}</Link>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

CommonHeader.propTypes = {
  clothes: PropTypes.array.isRequired,
  digital: PropTypes.array.isRequired,
  accessory: PropTypes.array.isRequired,
};

export default CommonHeader;

const CustomFaBars = <FaBars /> ?? null;
const CustomBsSun = <BsSun /> ?? null;
const CustomFaRegMoon = <FaRegMoon /> ?? null;
const CustomaCartShopping = <FaCartPlus className="cart" /> ?? null;
