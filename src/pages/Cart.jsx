import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <ShoppingCartIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any pizzas yet.</p>
        <Link
          to="/menu"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
        >
          View Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <div key={`${item.id}-${item.size}`} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">Size: {item.size}</p>
              <p className="text-gray-500">${item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.size, Math.max(0, item.quantity - 1))}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <span className="font-semibold w-20 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item)}
                className="text-gray-400 hover:text-red-600"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
        </div>
        <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}