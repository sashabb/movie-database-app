import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <ul>
        <li>
          <Link to={"/watched"}>Watched</Link>
        </li>
        <li>
          <Link to={"/add"}>Add</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
