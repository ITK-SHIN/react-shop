/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ clothes, digital, accessory }) => {
  const clothesData = clothes;
  const digitalData = digital;
  const accessorData = accessory;
  const data = [...clothesData, ...accessorData, ...digitalData];

  let { id } = useParams();

  const imgUrl = `/public/${data[id - 1].url}`;

  return (
    <div className="productDetail">
      <figure className="card-top">
        <img src={imgUrl} alt="상품 이미지" />
      </figure>
      <div className="card-body">
        <h4 className="card-title">{data[id - 1].title}</h4>
        <h5 className="sub-title">{data[id - 1].subTitle}</h5>
        <div className="starCount-people">
          <div className="starCount">3.9</div>
          <div className="peopleCount">120참여</div>
        </div>
        <p className="">{data[id - 1].price}</p>
        <div className="card-actions">
          <button>장바구니에 담기</button>
          <button>장바구니로 이동</button>
        </div>
      </div>
    </div>
  );
};

//data prop이 객체임을 명시적으로 지정하고, 해당 객체의 title, url, price 속성이 각각 문자열임을 지정
/* ProductDetail.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
}; */

export default ProductDetail;
