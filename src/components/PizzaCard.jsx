import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

export default function PizzaCard({ pizza }) {
  const [selectedSize, setSelectedSize] = React.useState("medium");
  const { addToCart } = useCart();

  const sizes = {
    small: { label: "Small", price: -2 },
    medium: { label: "Medium", price: 0 },
    large: { label: "Large", price: 2 },
  };

  const finalPrice = pizza.price + sizes[selectedSize].price;

  const handleAddToCart = () => {
    addToCart({
      ...pizza,
      size: selectedSize,
      price: finalPrice,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{pizza.name}</h3>
          <span className="text-lg font-bold text-red-600">
            ${finalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{pizza.description}</p>

        <div className="flex gap-2 mb-4">
          {Object.entries(sizes).map(([size, { label }]) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedSize === size
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
