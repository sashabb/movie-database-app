import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/watched"}>Watched</Link>
        </li>
        <li className={"add-btn"}>
          <Link to={"/add"}>Add</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
