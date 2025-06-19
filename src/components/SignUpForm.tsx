import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormSection } from "@/components/form-sections/FormSection";
import { FormRow } from "@/components/form-sections/FormRow";
import { FormGroup } from "@/components/form-sections/FormGroup";
import axios from "axios";


export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    country: "",
  });
  const [showReport, setShowReport] = useState(false);
const navigate = useNavigate(); 
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://ivf-ht0d.onrender.com/api/users/signup", formData, {
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
  <>
  <Card className="max-w-xl mx-auto mt-12 bg-white shadow-xl rounded-xl overflow-hidden">
    <CardHeader className="text-center mt-4">
      <CardTitle className="text-2xl font-semibold text-blue-600">Sign Up</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit} className="p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Account Information</h2>

        {/* First Row: Email + Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="At least 8 characters"
              required
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Second Row: Username + Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Username */}
          <div>
            <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username *
            </Label>
            <Input
              type="text"
              id="username"
              placeholder="Choose a username"
              required
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country */}
          <div>
            <Label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country *
            </Label>
            <Select onValueChange={(value) => handleInputChange("country", value)}>
              <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
        </div>

        {/* Terms Note */}
        <p className="text-xs text-gray-500 mt-4">
          By creating an account, you agree to our Terms of Service.
        </p>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-300"
          >
            Sign up
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
</>
  )
};
