import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
       <h3 className="navbar-brand fw-bold fs-3 text-white mb-0"> ShopEase</h3>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/products">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/cart">
              Cart
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/order">
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fw-semibold" to="/profile">
               👤Profile
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;