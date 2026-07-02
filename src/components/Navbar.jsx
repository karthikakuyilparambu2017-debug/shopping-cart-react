import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-lg sticky-top"
      style={{
        background:
          "linear-gradient(90deg, #0f172a, #1e3a8a, #2563eb)",
      }}
    >
      <div className="container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand fw-bold fs-2 text-decoration-none"
        >
           <span className="text-warning">Shop</span>
          <span className="text-white">Ease</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center text-center">

            <li className="nav-item mx-lg-2 my-2 my-lg-0">
              <Link
                className="nav-link text-white fw-semibold"
                to="/"
              >
                 Home
              </Link>
            </li>

            <li className="nav-item mx-lg-2 my-2 my-lg-0">
              <Link
                className="nav-link text-white fw-semibold"
                to="/products"
              >
                 Products
              </Link>
            </li>

            <li className="nav-item mx-lg-2 my-2 my-lg-0">
              <Link
                className="nav-link text-white fw-semibold"
                to="/cart"
              >
                Cart
              </Link>
            </li>

            <li className="nav-item mx-lg-2 my-2 my-lg-0">
              <Link
                className="nav-link text-white fw-semibold"
                to="/order"
              >
                 Orders
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link
                className="btn btn-warning rounded-pill fw-bold px-4 shadow"
                to="/profile"
              >
                👤 My Profile
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;