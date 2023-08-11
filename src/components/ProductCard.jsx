const ProductCard = data => {
  console.log(data.data.data[0]);
  return (
    <div className="productCard">
      <figure className="card-top">
        <img src="/fassion1.jpg" alt="상품 이미지" />
      </figure>
      <div className="card-body">
        <h4 className="card-title">{data.data.data[0].title}</h4>
        <p className="">{data.data.data[0].price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
