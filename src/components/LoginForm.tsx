import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("https://ivf-ht0d.onrender.com/api/users/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSuccess("Login successful!");
       navigate("/home");
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || "Login failed. Please try again.";
      setError(errorMsg);
    }
  };

  return (
   <Card className="max-w-md mx-auto mt-12 bg-white shadow-xl rounded-xl overflow-hidden">
  <CardHeader className="text-center mt-4">
    <CardTitle className="text-2xl font-semibold text-blue-600">Login</CardTitle>
  </CardHeader>
  <CardContent>
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Login to Your Account</h2>

      <div className="space-y-5">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <Input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password *
          </label>
          <Input
            type="password"
            id="password"
            required
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Error and Success */}
        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-6">
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-300"
        >
          Login
        </Button>
      </div>
    </form>
  </CardContent>
</Card>
  );
};
