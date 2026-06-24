import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nin: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await API.post("/register", form);

      alert("Registration Successful!");

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }

    setLoading(false);
  };

  return (
    <AuthCard title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-4">

        <Input
          type="text"
          name="nin"
          placeholder="Enter your NIN"
          value={form.nin}
          onChange={handleChange}
        />

        <Input
          type="password"
          name="password"
          placeholder="Create Password"
          value={form.password}
          onChange={handleChange}
        />

        <Button>
          {loading ? "Registering..." : "Register"}
        </Button>

      </form>

      <p className="text-center mt-6 text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </AuthCard>
  );
}

export default Register;