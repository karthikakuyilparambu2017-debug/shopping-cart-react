import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Profile(){
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        pincode:"",
    });
    useEffect(()=>{
    const savedUser=JSON.parse(localStorage.getItem("user"))
    if(savedUser){
        setUser(savedUser);
    }
},[]);
const navigate=useNavigate();
const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value,
});
};
const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(user));

    alert("Profile Saved Successfully!");

    navigate("/profile");
};
const isSaved=localStorage.getItem("user");
    return(
   <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-6">

                    <div className="card shadow">

                        <div className="card-body">

                            <h2 className="text-center text-primary mb-4">
                                My Profile
                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={user.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Address</label>

                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        name="address"
                                        value={user.address}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">City</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        value={user.city}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Pincode</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="pincode"
                                        value={user.pincode}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                >
                                   {isSaved?"Update Profile":"Save Profile"}
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}
export default Profile;