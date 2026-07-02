import { useParams, useNavigate } from "react-router-dom";

function OrderDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

    const order = orders.find(
        (item) => item.id === Number(id)
    );

    if (!order) {
        return (
            <div className="container py-5 text-center">
                <h2>Order Not Found</h2>
            </div>
        );
    }

    return (

        <div className="container py-5">

            <div className="card shadow-lg border-0 rounded-4">

                <div className="row g-0">

                    <div className="col-md-4 text-center p-4">

                        <img
                            src={order.image}
                            alt={order.title}
                            className="img-fluid"
                            style={{
                                height: "250px",
                                objectFit: "contain"
                            }}
                        />

                    </div>

                    <div className="col-md-8">

                        <div className="card-body">

                            <h2 className="fw-bold">
                                {order.title}
                            </h2>

                            <hr />

                            <p>
                                <strong>Order ID :</strong>
                                ORD{order.id}2026
                            </p>

                            <p>
                                <strong>Price :</strong>
                                ₹{order.price}
                            </p>

                            <p>
                                <strong>Quantity :</strong>
                                {order.quantity}
                            </p>

                            <p>
                                <strong>Total :</strong>
                                ₹{(
                                    order.price * order.quantity
                                ).toFixed(2)}
                            </p>

                            <p>
                                <strong>Status :</strong>

                                <span className="badge bg-success ms-2">
                                    Delivered
                                </span>
                            </p>

                            <p>
                                <strong>Payment :</strong>

                                Cash on Delivery
                            </p>

                            <p>
                                <strong>Estimated Delivery :</strong>

                                2-3 Business Days
                            </p>

                            <button
                                className="btn btn-primary mt-3"
                                onClick={() => navigate("/order")}
                            >
                                Back to Orders
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default OrderDetails;