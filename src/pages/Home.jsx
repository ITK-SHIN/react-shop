import ProductCard from '../components/ProductCard.jsx';

import PropTypes from 'prop-types';

const Home = ({ clothes, digital, accessory }) => {
  const clothesData = clothes;
  const digitalData = digital;
  const accessoryata = accessory;

  /* let nevigate = useNavigate(); */

  return (
    <div className="Home">
      <div className="home-bg"></div>
      {/*       <div className="carousel-root carousel-container">
        <div className="carousel carousel-slider">
          <ul className="control-dots">
            <li className="dot" value="0" role="button" tabIndex="0" aria-label="slide item 1"></li>
            <li className="dot" value="1" role="button" tabIndex="0" aria-label="slide item 2"></li>
            <li className="dot" value="2" role="button" tabIndex="0" aria-label="slide item 3"></li>
          </ul>
          <button className="control-arrow control-previous" type="button" aria-level="previous slide"></button>
          <div className="slide-wrapper">
            <ul>
              <li className="slide"></li>
              <li className="slide"></li>
              <li className="slide"></li>
              <li className="slide"></li>
              <li className="slide"></li>
            </ul>
          </div>
          <button className="control-arrow control-next" type="button" aria-level="previous slide"></button>
        </div>
      </div>
 */}
      <div className="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/img_shop_fashion.jpeg" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="public/img_shop_digital.jpeg" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="public/img_shop_grocery.jpeg" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control prev">❮</button>
        <button className="carousel-control next">❯</button>
      </div>{' '}
      *
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
