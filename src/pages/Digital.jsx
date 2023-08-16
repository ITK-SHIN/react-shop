import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

const Digital = props => {
  const data = props.data;

  return (
    <div className="Home">
      <section className="container">
        <h2 className="title">디지털</h2>

        <div className="productCards">
          <ul className="cardBox">
            {data.map((a, i) => {
              return (
                <li key={i}>
                  <ProductCard data={data[i]} key={i} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

Digital.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Digital;
