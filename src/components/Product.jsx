import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { addToCart } from "../features/cart/CartSlice";
import ProductReducer from "../features/product/ProductSlice";
import { fetchProduct } from "../features/product/ProductSlice";
import { useNavigate} from "react-router-dom";

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

    <div className="row justify-content-center mb-5">
  <div className="col-12 col-sm-10 col-md-8 col-lg-6">
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

       <div
  className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4"
  key={prod.id}
>

  <div
  className="card border-0 shadow h-100 rounded-4"
  style={{
    transition: "0.3s",
  }}
>

    <div className="text-center p-3">

      <img
        src={prod.image}
        alt={prod.title}
        className="img-fluid"
        style={{
height: "200px",
width: "100%",
objectFit: "contain",
}}
      />

    </div>

    <div className="card-body d-flex flex-column">

      <span
  className="badge bg-success mb-3 px-3 py-2"
  style={{ width: "fit-content" }}
>
        Free Delivery
      </span>

      <h6 className="fw-bold">
        {prod.title.length > 40
          ? prod.title.substring(0,40) + "..."
          : prod.title}
      </h6>

      <h4 className="text-danger fw-bold mt-2">
        ₹ {prod.price}
      </h4>

      <p className="text-muted mb-2">
        ⭐⭐⭐⭐☆ (4.5)
      </p>

      <button
        className="btn btn-warning fw-bold mt-auto"
        onClick={() => handleaddToCart(prod)}
      >
        🛒 Add to Cart
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