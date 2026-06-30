import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-6">

          <span className="badge bg-danger fs-6 mb-3">
            🔥 75% OFF
          </span>

          <h1 className="display-4 fw-bold text-primary">
            New Collections
          </h1>

          <p className="lead text-muted mt-3">
            Discover the latest fashion, electronics, and accessories from
            top global brands at amazing prices.
          </p>

          <p className="text-secondary">
            Shop your favourite products with exciting offers, secure payment,
            and fast delivery.
          </p>

          <Link to="/products">
            <button className="btn btn-primary btn-lg me-3">
              Shop Now
            </button>
          </Link>

          <Link to="/cart">
            <button className="btn btn-outline-dark btn-lg">
              View Cart
            </button>
          </Link>

        </div>

        {/* Right Side */}
        <div className="col-lg-6 text-center">

          <img
            src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=870&auto=format&fit=crop"
            alt="Shopping"
            className="img-fluid rounded shadow"
          />

        </div>

      </div>

    </div>
  );
}

export default Home;