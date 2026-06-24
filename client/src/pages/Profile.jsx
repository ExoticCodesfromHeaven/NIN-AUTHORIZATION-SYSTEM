import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Profile() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await API.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);

      } catch (err) {
        navigate("/login");
      }
    };

    fetchProfile();

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">

        <div className="text-center">

          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold mx-auto">

            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}

          </div>

          <h1 className="text-3xl font-bold mt-4">

            {user.firstName} {user.lastName}

          </h1>

          <p className="text-gray-500">
            NIN User Profile
          </p>

        </div>

        <div className="mt-8 space-y-4">

          <div className="flex justify-between">
            <strong>NIN</strong>
            <span>{user.nin}</span>
          </div>

          <div className="flex justify-between">
            <strong>Gender</strong>
            <span>{user.gender}</span>
          </div>

          <div className="flex justify-between">
            <strong>Date of Birth</strong>
            <span>{user.dob}</span>
          </div>

          <div className="flex justify-between">
            <strong>Phone</strong>
            <span>{user.phone}</span>
          </div>

          <div className="flex justify-between">
            <strong>Address</strong>
            <span>{user.address}</span>
          </div>

        </div>

        <button
          onClick={logout}
          className="w-full mt-8 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;