import {Link} from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>
        About Page
      </h1>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default AboutPage;
