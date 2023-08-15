/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ProductCard = props => {
  const cardInfo = props.data;

  const itemKey = cardInfo.id;

  let nevigate = useNavigate();

  const imgUrl = `/public/${cardInfo.url}`;
  return (
    <div
      className="productCard"
      onClick={() => {
        console.log(cardInfo);
        console.log(itemKey);
        console.log(imgUrl);

        nevigate(`/product/${itemKey}`);
      }}>
      <figure className="card-top">
        <img src={imgUrl} alt="상품 이미지" />
      </figure>
      <div className="card-body">
        <h4 className="card-title">{cardInfo.title}</h4>
        <p className="">{cardInfo.price}</p>
      </div>
    </div>
  );
};

//data prop이 객체임을 명시적으로 지정하고, 해당 객체의 title, url, price 속성이 각각 문자열임을 지정
ProductCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
