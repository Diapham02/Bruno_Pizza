import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span>
              <img
                src="/image/pizzeria.png"
                alt="Pizza"
                className="h-12 rounded-lg border border-gray-800 cursor-pointer transition-all duration-300 hover:scale-110"
              />
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-red-600">
              Menu
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-red-600 relative"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-red-600">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
