import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/auth/signin", { email, password });
      toast.success("Signin successful!");
      localStorage.setItem("token", response.data.token);
      navigate("/"); // Redirect to home or dashboard
    } catch (error) {
      toast.error("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="mt-1 p-2 w-full border rounded-md" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="mt-1 p-2 w-full border rounded-md" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-md">
            Sign In
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-indigo-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
