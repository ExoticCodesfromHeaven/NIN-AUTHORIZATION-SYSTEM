import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
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
      const res = await API.post("/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/profile");

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }

    setLoading(false);
  };

  return (
    <AuthCard title="Welcome Back">

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

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
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <Button>
          {loading ? "Logging in..." : "Login"}
        </Button>

      </form>

      <p className="text-center mt-6 text-gray-500">
        Don't have an account?{" "}
        <Link
          to="/"
          className="text-blue-600 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>

    </AuthCard>
  );
}

export default Login;