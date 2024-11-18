import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0 bg-[url('/image/bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative pt-16 pb-32 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
          FEELING HUNGRY?
        </h1>
        <p className="text-xl text-gray-200 text-center mb-12 max-w-2xl">
          Made with fresh ingredients and love. Order now and experience the
          taste of authentic Italian pizza.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Order Now
          <ArrowRightIcon className="h-5 w-5" />
        </Link>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {[
            {
              title: "Fresh Ingredients",
              description:
                "We use only the finest and freshest ingredients in our pizzas.",
            },
            {
              title: "Fast Delivery",
              description:
                "Hot and fresh pizza delivered to your doorstep in 30 minutes or less.",
            },
            {
              title: "Best Prices",
              description:
                "Enjoy our delicious pizzas at competitive prices with regular deals.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
