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
    return(
          <div className="container py-5">

      <h2 className="text-center text-primary fw-bold mb-5">
        Checkout
      </h2>

      <div className="row">

        {/* Left Side - Products */}
        <div className="col-lg-8">

          {cartItem.map((item) => (

            <div className="card shadow mb-4" key={item.id}>

              <div className="row g-0 align-items-center">

                <div className="col-md-4 text-center p-3">

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

                    <h5 className="card-title">
                      {item.title}
                    </h5>

                    <p className="mb-2">
                      <strong>Price:</strong> ₹{item.price}
                    </p>

                    <p className="mb-2">
                      <strong>Quantity:</strong> {item.quantity}
                    </p>

                    <p className="text-success fw-bold">
                      Subtotal :
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Right Side - Order Summary */}
        <div className="col-lg-4">

          <div className="card shadow sticky-top">

            <div className="card-body">

              <h4 className="text-center mb-4">
                Order Summary
              </h4>

              <div className="d-flex justify-content-between mb-3">
                <span>Items Total</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Delivery Charge</span>
                <span>₹{deliveryCharge}</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>GST</span>
                <span>₹{gst}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fs-4 fw-bold text-primary">
                <span>Grand Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>

              <button
                className="btn btn-success w-100 mt-4"
                onClick={handlePalaceOrder}
              >
                Place Order
              </button>

              <button
                className="btn btn-outline-secondary w-100 mt-2"
                onClick={() => navigate("/cart")}
              >
                Back to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
    );
}
export default Buy;