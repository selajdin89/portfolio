import Logo from "../../assets/Icons/Logo";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="button">View More</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
