import { useState,useEffect } from "react";
function Order(){
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        const savedOrder=JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrder);
    },[]);
    return(
            <div className="container py-5">
            <h2 className="text-center text-primary fw-bold mb-5">
                My Orders
            </h2>
            {orders.length === 0 ? (
                <div className="alert alert-warning text-center">
                    <h4>No Orders Yet</h4>
                </div>
            ) : (
                <div className="row">
                    {orders.map((item) => (
                        <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card shadow h-100">

                             <img
                                    src={item.image}
                                    alt={item.title}
                                    className="card-img-top p-3"
                                    style={{
                                        height: "220px",
                                        objectFit: "contain",
                                    }}
                                />
                                <div className="card-body">
                                    <h5>{item.title}</h5>
                                    <p>
                                       <strong>Price:</strong> ₹{item.price}
                                    </p>
                                    <p>
                                        <strong>Quantity:</strong> {item.quantity}
                                    </p>
                                    <span className="badge bg-success">
                                        Ordered Successfully
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
              </div>
           )}
        </div>
    );
}
export default Order;