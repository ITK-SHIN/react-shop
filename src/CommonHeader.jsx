import { Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
/* 
import { FaRegMoon, FaCartShopping, FaBars } from 'react-icons/fa6'; */
import { BsSun } from 'react-icons/bs';

import { FaRegMoon, FaCartPlus, FaBars } from 'react-icons/fa';

const CommonHeader = () => {
  const activeStyle = {
    color: 'bisque',
  };

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
              <NavLink to="/fassion" className="link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                패션
              </NavLink>
            </li>
            <li className="item-list">
              <NavLink to="/accessory" className="link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                액세서리
              </NavLink>
            </li>
            <li className="item-list">
              <NavLink to="/digital" className="link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                디지털
              </NavLink>
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
