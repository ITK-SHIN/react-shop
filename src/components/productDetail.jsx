import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ clothes, digital, accessory }) => {
  const data = [...clothes, ...accessory, ...digital];

  let { id } = useParams();
  const imgUrl = `/public/${data[id - 1].url}`;

  useEffect(() => {
    console.log('안녕');
  });

  let [count, setCount] = useState(0);

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
          <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
      </div>
    </div>
  );
};

//data prop이 객체임을 명시적으로 지정하고, 해당 객체의 title, url, price 속성이 각각 문자열임을 지정
ProductDetail.propTypes = {
  clothes: PropTypes.array.isRequired,
  digital: PropTypes.array.isRequired,
  accessory: PropTypes.array.isRequired,
};

export default ProductDetail;
