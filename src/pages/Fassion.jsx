import ProductCard from '../components/ProductCard';
import PropTypes from 'prop-types';

const Fassion = props => {
  const data = props.data;

  return (
    <div className="Home">
      <section className="container">
        <h2 className="title">패션</h2>

        <div className="productCards">
          <ul className="cardBox">
            {data.map((a, i) => {
              return (
                <li key={i}>
                  <ProductCard data={data[i]} />
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
Fassion.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Fassion;
