import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Order(){
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        const savedOrder=JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrder);
    },[]);
    const navigate=useNavigate();
    return (
  <div className="container py-5">

    {/* Page Heading */}
    <div className="text-center mb-5">
      <h1 className="display-5 fw-bold text-primary">
         My Orders
      </h1>
      <p className="text-muted fs-5">
        Thank you for shopping with us!
      </p>
    </div>

    {orders.length === 0 ? (

      <div className="card shadow-lg border-0 rounded-4 text-center p-5">

        <h2 className="text-secondary">
          😔 No Orders Yet
        </h2>

        <p className="text-muted">
          Start shopping and your orders will appear here.
        </p>

      </div>

    ) : (

      orders.map((item) => (

        <div
        className="card shadow-lg border-0 rounded-4 mb-4 overflow-hidden"
style={{
    transition: "0.3s"
}}
          key={item.id}
        >

          <div className="row g-0 align-items-center">

            {/* Product Image */}
            <div className="col-12 col-md-3 text-center p-4">

              <img
                src={item.image}
                alt={item.title}
                className="img-fluid"
                style={{
    maxHeight: "180px",
    width: "100%",
    objectFit: "contain",
}}
              />

            </div>

            {/* Product Details */}
            <div className="col-12 col-md-6">

              <div className="card-body text-center text-md-start">

                <span className="badge bg-success mb-2">
                  Delivered
                </span>

                <h4 className="fw-bold">
                  {item.title}
                </h4>

                <p className="text-warning mb-2">
                  ⭐⭐⭐⭐⭐ Premium Product
                </p>

                <p>
                  <strong>Price :</strong>
                  <span className="text-danger fs-5 ms-2">
                    ₹{item.price}
                  </span>
                </p>

                <p>
                  <strong>Quantity :</strong>
                  <span className="badge bg-primary ms-2">
                    {item.quantity}
                  </span>
                </p>

              </div>

            </div>

            {/* Status */}
            <div className="col-12 col-md-3">

              <div className="card-body text-center d-flex flex-column justify-content-center h-100">

                <div className="badge bg-success fs-6 mb-3 p-2">
                  ✔ Ordered Successfully
                </div>

                <p className="text-muted mb-2">
                   Expected Delivery
                </p>

                <h6 className="fw-bold text-success">
                  2 - 3 Business Days
                </h6>

                <button
   className="btn btn-primary rounded-pill mt-3 w-100"
    onClick={() => navigate(`/orderdetails/${item.id}`)}
>
    View Details
</button>

              </div>

            </div>

          </div>

        </div>

      ))

    )}

  </div>
);
}
export default Order;