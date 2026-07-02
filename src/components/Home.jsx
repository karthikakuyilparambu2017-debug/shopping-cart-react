import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="py-5"
      style={{
        background:
          "linear-gradient(to right,#eef5ff,#ffffff,#eef5ff)",
        minHeight: "90vh",
      }}
    >
      <div className="container">

        <div className="row align-items-center gy-5">

          {/* Left Section */}
          <div className="col-12 col-lg-6 text-center text-lg-start">

            <span className="badge bg-danger fs-6 px-3 py-2 rounded-pill shadow-sm">
              🔥 BIG SALE UP TO 75% OFF
            </span>

            <h1
  className="display-4 display-lg-2 fw-bold mt-4"
  style={{ lineHeight: "1.2" }}
>
            
              Discover Your
              <br />
              <span className="text-primary">
                Dream Shopping
              </span>
            </h1>

            <p className="lead text-secondary mt-4">
              Shop premium fashion, electronics,
              accessories and lifestyle products
              from the world's most trusted brands.
            </p>

            <p className="text-muted">
              ✔ Fast Delivery <br />
              ✔ Secure Payment <br />
              ✔ Easy Returns <br />
              ✔ Premium Quality
            </p>

            <div
  className="mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3"
>

              <Link to="/products">
                <button className="btn btn-primary btn-lg px-5 rounded-pill shadow ">
                  Shop Now
                </button>
              </Link>

              <Link to="/cart">
                <button className="btn btn-outline-dark btn-lg px-5 rounded-pill">
                  View Cart
                </button>
              </Link>

            </div>

            {/* Statistics */}

            <div className="row mt-5 text-center">

              <div className="col-4 mb-4">

                <h3 className="fw-bold text-primary">
                  20K+
                </h3>

                <p className="text-muted">
                  Happy Customers
                </p>

              </div>

              <div className="col-4 mb-4">

                <h3 className="fw-bold text-primary">
                  500+
                </h3>

                <p className="text-muted">
                  Premium Products
                </p>

              </div>

              <div className="col-4 mb-4">

                <h3 className="fw-bold text-primary">
                  50+
                </h3>

                <p className="text-muted">
                  Top Brands
                </p>

              </div>

            </div>

          </div>

          {/* Right Section */}

          <div className="col-12 col-lg-6 text-center">

            <img
              src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=870&auto=format&fit=crop"
              alt="Shopping"
              className="img-fluid rounded-5 shadow-lg"
              style={{
    width: "100%",
    maxWidth: "520px",
    height: "auto",
    objectFit: "cover",
}}
            />

          </div>

        </div>

        {/* Features */}

        <div className="row text-center mt-5">

          <div className="col-12 col-sm-6 col-lg-3 mb-4">

            <div className="card border-0 shadow rounded-4 p-4 h-100">

              <h1 className="display-4 mb-3">🚚</h1>

              <h5 className="fw-bold">
                Free Shipping
              </h5>

              <p className="text-muted">
                Free delivery on orders over ₹999.
              </p>

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <div className="card border-0 shadow rounded-4 p-4">

              <h1>💳</h1>

              <h5 className="fw-bold">
                Secure Payment
              </h5>

              <p className="text-muted">
                100% safe online payment.
              </p>

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <div className="card border-0 shadow rounded-4 p-4">

              <h1>🔄</h1>

              <h5 className="fw-bold">
                Easy Returns
              </h5>

              <p className="text-muted">
                7 Days hassle-free returns.
              </p>

            </div>

          </div>

          <div className="col-md-3 mb-3">

            <div className="card border-0 shadow rounded-4 p-4">

              <h1>⭐</h1>

              <h5 className="fw-bold">
                Premium Quality
              </h5>

              <p className="text-muted">
                Genuine branded products.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;