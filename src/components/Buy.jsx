import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/CartSlice";
function Buy(){
    const cartItem=useSelector(
        (state)=>state.cart.cartItem
    );
    const totalAmount=cartItem.reduce(
        (total,item)=>total+item.price*item.quantity,0
    );
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const deliveryCharge=50;
    const gst=150;
    const grandTotal=totalAmount+deliveryCharge+gst;
    const handlePalaceOrder=()=>{
      localStorage.setItem("orders",JSON.stringify(cartItem));
      dispatch(clearCart());
      navigate("/order")
    }
    return (
  <div className="container py-5">

    {/* Heading */}
    <div className="text-center mb-5">
      <h1 className="fw-bold text-primary">
        Secure Checkout
      </h1>
      <p className="text-muted">
        Review your order before placing it.
      </p>
    </div>

    <div className="row">

      {/* LEFT SIDE */}
      <div className="col-lg-8">

        {cartItem.map((item) => (

          <div
            className="card border-0 shadow-lg rounded-4 mb-4"
            key={item.id}
          >

            <div className="row g-0 align-items-center">

              <div className="col-md-4 text-center p-4">

                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                  style={{
                    height: "180px",
                    objectFit: "contain",
                  }}
                />

              </div>

              <div className="col-md-8">

                <div className="card-body">

                  <span className="badge bg-success mb-2">
                    Free Delivery
                  </span>

                  <h4 className="fw-bold">
                    {item.title}
                  </h4>

                  <p className="text-warning mb-2">
                    ⭐⭐⭐⭐⭐ (4.8 Rating)
                  </p>

                  <h5 className="text-danger fw-bold">
                    ₹ {item.price}
                  </h5>

                  <p>
                    Quantity :
                    <span className="badge bg-primary ms-2">
                      {item.quantity}
                    </span>
                  </p>

                  <p className="text-success fw-bold fs-5">
                    Subtotal :
                    ₹ {(item.price * item.quantity).toFixed(2)}
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* RIGHT SIDE */}
      <div className="col-lg-4">

        <div
          className="card shadow-lg border-0 rounded-4 sticky-top"
          style={{
    top: "100px",
    zIndex: 1
}}
        >

          <div className="card-body p-4">

            <h3 className="text-center fw-bold mb-4">
              Order Summary
            </h3>

            <div className="d-flex justify-content-between mb-3">
              <span>Items Total</span>
              <strong>₹ {totalAmount.toFixed(2)}</strong>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Delivery</span>
              <span className="text-success">
                ₹ {deliveryCharge}
              </span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>GST</span>
              <span>₹ {gst}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Discount</span>
              <span className="text-success">
                - ₹100
              </span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fs-3 fw-bold text-primary">

              <span>Total</span>

              <span>
                ₹ {(grandTotal - 100).toFixed(2)}
              </span>

            </div>

            <hr />

            <div className="bg-light rounded-3 p-3 mb-4">

              <h6 className="fw-bold">
                Why Shop With Us?
              </h6>

              <p className="mb-1">
                Secure Payment
              </p>

              <p className="mb-1">
                Fast Delivery
              </p>

              <p className="mb-0">
                 Easy Returns
              </p>

            </div>

            <button
              className="btn btn-success btn-lg w-100 mb-3"
              onClick={handlePalaceOrder}
            >
               Place Order
            </button>

            <button
              className="btn btn-outline-dark w-100"
              onClick={() => navigate("/cart")}
            >
              ← Back to Cart
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
);
    
}
export default Buy;