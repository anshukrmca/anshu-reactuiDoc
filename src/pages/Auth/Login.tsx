import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../CustomeHooks/Hooks";
import { Input, toast } from "anshu-reactui";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    username: "anjali.verma",
    password: "securePass@456",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("Please fill the form");
      return;
    }

    // dispatch(UseLogin(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[450px] rounded-2xl bg-white p-12 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            alt="Logo"
            className="h-14 w-14"
            src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png"
          />
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-lg font-semibold text-purple-600">
            Login to Your Account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-6">
          <Input
            value={formData.username}
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            className="mt-4"
            onChange={handleChange}
            mand
          />
          <Input
            onChange={handleChange}
            value={formData.password}
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="mt-4"
            mand
          />

          <button
            type="submit"
            className="w-full mt-6 flex justify-center items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-sm text-purple-600 hover:text-purple-500"
          >
            Forgot your password ?
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account yet ?
          <Link
            to="/sign-up"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            &nbsp; Sign-Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
