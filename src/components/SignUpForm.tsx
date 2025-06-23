import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    labName: "",
    country: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://ivf-ht0d.onrender.com/api/users/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/home");
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      {/* Logo & Header */}
      <div className="text-center mb-6">
        <img src="/test.png" alt="LogHub logo" className="h-16 mx-auto mb-2" />
        <h1 className="text-2xl font-bold text-gray-900">LogHub</h1>
          <p className="text-sm">by Webiosis</p>
        <p className="text-sm text-blue-600">The IVF Lab’s Smartest Logbook</p>
      </div>

      {/* Card Form */}
      <Card className="w-full max-w-md bg-white rounded-xl shadow-md">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Create your LogHub account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@clinic.com"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="At least 8 characters"
                required
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
            </div>

            {/* Lab Name */}
            <div>
              <Label htmlFor="labName" className="text-sm font-medium">Clinic / Lab Name</Label>
              <Input
                id="labName"
                type="text"
                placeholder="EmbryoCare IVF"
                required
                value={formData.labName}
                onChange={(e) => handleInputChange("labName", e.target.value)}
              />
            </div>

            {/* Country */}
            <div>
              <Label className="text-sm font-medium">Country</Label>
              <Select onValueChange={(value) => handleInputChange("country", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sign Up Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Sign Up
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 underline">Terms of Service</a>.
          </p>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="mt-6 text-xs text-gray-400">
        © 2025 Webiosis. All rights reserved.
      </footer>
    </div>
  );
};
