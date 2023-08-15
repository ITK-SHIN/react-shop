import ProductCard from '../components/ProductCard.jsx';
import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const Home = ({ clothes, digital, accessory }) => {
  const clothesData = clothes;
  const digitalData = digital;
  const accessoryata = accessory;

  /* let nevigate = useNavigate(); */

  return (
    <div className="Home">
      <div className="home-bg"></div>
      <section className="container">
        <h2 className="title">패션</h2>

        <div className="productCards">
          <ul className="cardBox">
            {clothesData.slice(0, 4).map((a, i) => {
              return (
                <li key={i}>
                  <ProductCard data={clothesData[i]} key={i} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container">
        <h2 className="title">액세서리</h2>

        <div className="productCards">
          <ul className="cardBox">
            {accessoryata.slice(0, 4).map((a, i) => {
              return (
                <li key={i}>
                  <ProductCard data={accessoryata[i]} key={i} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container">
        <h2 className="title">디지털</h2>

        <div className="productCards">
          <ul className="cardBox">
            {digitalData.slice(0, 4).map((a, i) => {
              return (
                <li key={i}>
                  <ProductCard data={digitalData[i]} key={i} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

//data prop이 배열임을 명시적으로 지정
Home.propTypes = {
  clothes: PropTypes.array.isRequired,
  digital: PropTypes.array.isRequired,
  accessory: PropTypes.array.isRequired,
};

export default Home;
