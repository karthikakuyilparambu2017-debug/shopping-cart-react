import { Link } from "react-router-dom";

function ProfileDetails() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-7">

          <div
            className="card border-0 shadow-lg"
            style={{ borderRadius: "20px" }}
          >

            <div
              className="card-header text-white text-center py-4"
              style={{
                background:
                  "linear-gradient(90deg,#0d6efd,#4f46e5)"
              }}
            >
              <h2>👤 My Profile</h2>
            </div>

            <div className="card-body p-5">

              <div className="text-center mb-4">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="profile"
                  width="110"
                />

                <h4 className="mt-3">
                  {user.name || "Guest User"}
                </h4>

              </div>

              <hr />

              <div className="row mb-3">
                <div className="col-4 fw-bold">
                  Email
                </div>

                <div className="col-8">
                  {user.email}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-4 fw-bold">
                  Phone
                </div>

                <div className="col-8">
                  {user.phone}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-4 fw-bold">
                  Address
                </div>

                <div className="col-8">
                  {user.address}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-4 fw-bold">
                  City
                </div>

                <div className="col-8">
                  {user.city}
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-4 fw-bold">
                  Pincode
                </div>

                <div className="col-8">
                  {user.pincode}
                </div>
              </div>

              <div className="text-center">

                <Link to="/profile/edit">

                  <Link to="/profile/edit">
    <button className="btn btn-warning btn-lg px-5">
        Edit Profile
    </button>
</Link>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileDetails;