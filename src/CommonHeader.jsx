import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaLightbulb, FaRegLightbulb, FaCartShopping, FaBars } from 'react-icons/fa6';
const CommonHeader = ({ clothes, digital, accessory }) => {
  const clothesData = clothes;
  const digitalData = digital;
  const accessoryData = accessory;

  return (
    <>
      <header className="CommonHeader">
        <div className="header">
          <label htmlFor="side-menu" className="hidden">
            <FaBars />
          </label>

          <h1 className="title">
            <Link to="/" className="mainTitle">
              React Shop
            </Link>
          </h1>

          <ul className="item">
            <li className="item-list">
              <Link to="/fassion" className="link" clothes={clothesData}>
                패션
              </Link>
            </li>
            <li className="item-list">
              <Link to="/accessory" className="link" accessory={accessoryData}>
                액세서리
              </Link>
            </li>
            <li className="item-list">
              <Link to="/digital" className="link" digital={digitalData}>
                디지털
              </Link>
            </li>
          </ul>

          <div className="sidebar">
            <label htmlFor="" className="swap">
              <input type="checkbox" className="js-theme" />
              <FaLightbulb />
              <FaRegLightbulb />
            </label>

            <input type="text" placeholder="검색" />

            <Link to="/cart">
              <FaCartShopping className="cart" />
            </Link>
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
