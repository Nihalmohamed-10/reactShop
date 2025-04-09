import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5006/api/users/login", data);
      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        console.log(" Token saved:", token);
        navigate("/products");
      } else {
        console.error("Token is missing from response");
      }
    } catch (error) {
      console.error(" Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSignin}>
      <div className="mt-20 w-[90%] mx-auto border-3 rounded-lg border-gray-100 pt-8 pb-8">
        <h1 className="text-center text-[22px] font-bold text-[#703BF7]">Login</h1>
        <div className="mt-8 grid flex flex-col gap-5 p-5 w-full max-w-[640px] mx-auto">
          <div className="md:px-[50px]">
            <label className="block text-[20px] font-semibold">Email Address</label>
            <input
              name="email"
              type="email"
              className="w-full pl-3 pt-3 pb-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="md:px-[50px]">
            <label className="block text-[20px] font-semibold">Password</label>
            <input
              name="password"
              type="password"
              className="w-full pl-3 pt-3 pb-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={data.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-5">
          <button type="submit" className="w-[300px] p-4 bg-[#703BF7] text-white rounded-lg">Login</button>
          <Link to="/signup">
            <button type="button" className="w-[300px] p-4 bg-gray-800 text-white rounded-lg">Sign Up</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignIn;

