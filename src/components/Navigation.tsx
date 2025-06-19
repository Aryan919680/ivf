
import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/placeholder.svg" 
              alt="Webiosis IVF Logo" 
              className="h-10 w-auto rounded-md bg-gray-100 p-1"
            />
            <span className="text-xl font-bold text-blue-900 tracking-wide">LogHub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              Home
            </Link>
            <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              Sign Up
            </Link>
            <span className="text-gray-400 line-through cursor-not-allowed">
              Sample Report
            </span>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-blue-600" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <div className="flex flex-col space-y-3 px-4">
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">
                Home
              </Link>
              <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-semibold">
                Sign Up
              </Link>
              <span className="text-gray-400 line-through cursor-not-allowed">
                Sample Report
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
