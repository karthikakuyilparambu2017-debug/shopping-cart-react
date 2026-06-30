import { useDispatch,useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/CartSlice";
import { useNavigate } from "react-router-dom";
 function Cart(){
    const cartItem=useSelector((state)=>
        state.cart.cartItem
    )
    const dispatch=useDispatch();
    const navigate=useNavigate();
     return (
  <div className="container py-5">

    <h2 className="text-center mb-5 fw-bold text-primary">
      Cart
    </h2>

    {cartItem.length === 0 ? (

      <div className="alert alert-warning text-center">
        <h4>No products in cart</h4>
      </div>

    ) : (

      <div className="row g-4">

        {cartItem.map((cart) => (

          <div className="col-lg-4 col-md-6" key={cart.id}>

            <div className="card shadow h-100">

              <img
                src={cart.image}
                alt={cart.title}
                className="card-img-top p-3"
                style={{
                  height: "220px",
                  objectFit: "contain"
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title">
                  {cart.title}
                </h5>

                <p className="card-text">
                  <strong>Price:</strong> ₹ {cart.price}
                </p>

                <p className="card-text">
                  <strong>Quantity:</strong> {cart.quantity}
                </p>

                <button
                  className="btn btn-danger mt-auto"
                  onClick={() => dispatch(removeFromCart(cart.id))}
                >
                  Remove
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    )}
    <div className="text-end mt-4">
  <button
    className="btn btn-success btn-lg"
    onClick={() => navigate("/buy")}
  >
    Buy
  </button>
</div>

  </div>
);
        
}
 export default Cart;