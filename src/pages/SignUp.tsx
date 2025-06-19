import { Navigation } from "@/components/Navigation";
import { SignUpForm } from "@/components/SignUpForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to Login Page
  };

  const handleSignUpClick = () => {
    navigate("/SignUp"); // Navigate to SignUp Page (current page)
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-1 flex justify-center items-start pt-8">
        <div className="w-full max-w-md px-4">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Create Your Free Account
            </h1>
            <p className="text-gray-600">
              Explore LogHub's key features for IVF embryologists & clinics.
            </p>
          </header>

          <div className="mb-4">
            <button
              onClick={handleLoginClick}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mb-4"
            >
              Login
            </button>
            <button
              onClick={handleSignUpClick}
              className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700"
            >
              Sign Up
            </button>
          </div>

          {/* Show the SignUpForm only when the user is on the signup page */}
          {/* <SignUpForm /> */}
        </div>
      </div>
      <footer className="bg-white border-t mt-16 py-4 text-center text-gray-600">
        © 2025 LogHub. By Webiosis. All rights reserved.
      </footer>
    </div>
  );
};

export default SignUp;
