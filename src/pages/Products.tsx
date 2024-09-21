import {Link} from "react-router-dom";

const ProductsPage = () => {
  return (
    <div>
      <h1>
        Products Page
      </h1>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default ProductsPage;
