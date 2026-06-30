import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { addToCart } from "../features/cart/CartSlice";
import ProductReducer from "../features/product/ProductSlice";
import { fetchProduct } from "../features/product/ProductSlice";
import { useNavigate,Navigate } from "react-router-dom";

function Product(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [search,setSearch]=useState("");
//     const product=[{
//         id:1,
//         name:"laptop",
//         price:60000,
//     },
//     {
//         id:2,
//         name:"mobile",
//         price:25000, 
//     },
//     {
//         id: 3,
//         name: "Tablet",
//         price: 30000,
//     }    
// ];
 const {item,loading,error}=useSelector(
    (state)=>state.products
 );
 useEffect(()=>{dispatch(fetchProduct())},
 [dispatch])

if (loading) return <p>Loading products</p>;
    if (error) return <p>Error: {error}</p>;

    const searchItem=item.filter((prod)=>
        prod.title.toLowerCase().includes(search.toLowerCase())
    );

const handleaddToCart = (prod)=>{
    dispatch(addToCart(prod))
    navigate("/cart")
}


    return (
  <div className="container py-4">

    <h2 className="text-center mb-4 fw-bold text-primary">
      Products
    </h2>

    <div className="row justify-content-center mb-4">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control form-control-lg shadow-sm"
          placeholder=" Search Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>

    <div className="row g-4">

      {searchItem.map((prod) => (

        <div className="col-lg-3 col-md-4 col-sm-6" key={prod.id}>

          <div className="card h-100 shadow border-0">

            <img
              src={prod.image}
              alt={prod.title}
              className="card-img-top p-3"
              style={{
                height: "220px",
                objectFit: "contain"
              }}
            />

            <div className="card-body d-flex flex-column">

              <h6
                className="card-title"
                style={{ minHeight: "50px" }}
              >
                {prod.title}
              </h6>

              <h5 className="text-success fw-bold">
                ₹ {prod.price}
              </h5>

              <button
                className="btn btn-primary mt-auto"
                onClick={() => handleaddToCart(prod)}
              >
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
);
}
export default Product;