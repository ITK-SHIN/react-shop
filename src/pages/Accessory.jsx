import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

const Accessory = props => {
  const data = props.data;
  return (
    <div className="Home">
      <section className="container">
        <h2 className="title">액세서리</h2>

        <div className="productCards">
          <ul className="cardBox">
            {data.map((a, i) => {
              return (
                <li key={a.id}>
                  <ProductCard data={data[i]} key={a.id} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

Accessory.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Accessory;
