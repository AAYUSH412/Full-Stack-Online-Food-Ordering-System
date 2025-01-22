import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, UserPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
          credentials: "include",
        }
      );

      const data = await response.json();
      if (data.success) {
        setUser(data.user);
        navigate("/");
      } else {
        setError(data.message || "Failed to create account");
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const renderInput = (id, name, type, placeholder, Icon) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {placeholder}
      </label>
      <div className="mt-1 relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          id={id}
          name={name}
          type={type}
          required
          value={formData[name]}
          onChange={handleChange}
          className="pl-10 block w-full rounded-lg border border-gray-300 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder={placeholder}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-32 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <UserPlus className="mx-auto h-12 w-12 text-purple-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-800">
              Create an account
            </h2>
            <p className="mt-2 text-gray-600">Join BiteBuddy today</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {renderInput("name", "name", "text", "Full Name", User)}
            {renderInput("email", "email", "email", "Email Address", Mail)}
            {renderInput("password", "password", "password", "Password", Lock)}
            {renderInput(
              "confirmPassword",
              "confirmPassword",
              "password",
              "Confirm Password",
              Lock
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
