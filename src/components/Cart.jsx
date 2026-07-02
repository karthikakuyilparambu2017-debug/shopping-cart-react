import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItem = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">

      <h2 className="text-center fw-bold text-primary mb-5">
        🛒 My Shopping Cart
      </h2>

      {cartItem.length === 0 ? (

        <div className="alert alert-warning text-center p-5">
          <h3>Your Cart is Empty </h3>
          <p>Add products and start shopping.</p>
        </div>

      ) : (

        <div className="row">

          {/* Cart Products */}
          <div className="col-lg-8">

            {cartItem.map((cart) => (

              <div className="card shadow-sm border-0 mb-4" key={cart.id}>

                <div className="row g-0 align-items-center">

                  <div className="col-md-3 text-center p-3">

                    <img
                      src={cart.image}
                      alt={cart.title}
                      className="img-fluid"
                      style={{
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />

                  </div>

                  <div className="col-md-6">

                    <div className="card-body">

                      <h5 className="fw-bold">
                        {cart.title}
                      </h5>

                      <p className="text-success mb-1">
                        ⭐ 4.5 Rating
                      </p>

                      <p className="text-muted">
                        Free Delivery Available
                      </p>

                    </div>

                  </div>

                  <div className="col-md-3">

                    <div className="card-body text-center">

                      <h4 className="text-danger fw-bold">
                        ₹ {cart.price}
                      </h4>

                      <p>
                        Qty : <strong>{cart.quantity}</strong>
                      </p>

                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>
                          dispatch(removeFromCart(cart.id))
                        }
                      >
                         Remove
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Order Summary */}
          <div className="col-lg-4">

            {/* <div className="card shadow border-0 sticky-top"> */}
            <div
  className="card shadow position-sticky"
  style={{
    top: "90px",   // leaves space for the navbar
    zIndex: 1
  }}
>

              <div className="card-body">

                <h4 className="fw-bold text-center mb-4">
                  Order Summary
                </h4>

                <div className="d-flex justify-content-between mb-3">
                  <span>Total Items</span>
                  <strong>{cartItem.length}</strong>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Total Price</span>
                  <strong>₹ {total.toFixed(2)}</strong>
                </div>

                <hr />

                <button
                  className="btn btn-success w-100 btn-lg"
                  onClick={() => navigate("/buy")}
                >
                  Proceed to Checkout →
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;