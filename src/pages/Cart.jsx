import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  let data = useSelector(state => {
    return state;
  });
  console.log(data);

  let nevigate = useNavigate();

  return (
    <section className="Cart">
      <div className="top-box">
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>

      <div className="middle-box">
        <h1>장바구니에 물품이 없습니다.</h1>
        <button onClick={() => nevigate(`/`)}>담으러 가기</button>
      </div>

      <div className="bottom-box">
        <div></div>
        <div>
          <span>총 : $0 </span>
          <label htmlFor="confirm-modal">구매하기</label>
        </div>
      </div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
    </section>
  );
};

export default Cart;
