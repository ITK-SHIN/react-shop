import ProductCard from '../components/ProductCard.jsx';

const Home = data => {
  return (
    <div className="Home">
      <div className="home-bg"></div>
      <section className="container">
        <h2 className="title">패션</h2>

        <div className="productCards">
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
          <ProductCard data={data} />
        </div>
      </section>
    </div>
  );
};

export default Home;
