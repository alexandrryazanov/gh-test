import {Link} from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>
        Main Page
      </h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default MainPage;
