import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/auth/signup", { name, email, password });
      toast.success("Signup successful! Please sign in.");
      navigate("/signin");
    } catch (error) {
      toast.error("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              className="mt-1 p-2 w-full border rounded-md" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          Already have an account? <Link to="/signin" className="text-indigo-500">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
