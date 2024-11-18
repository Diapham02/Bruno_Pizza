import React from "react";
import PizzaCard from "../components/PizzaCard";

const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description:
      "Fresh tomatoes, mozzarella, basil, and extra virgin olive oil",
    price: 12.99,
    image: "/image/photo-1574071318508-1cdbab80d002.png", // Sửa đường dẫn
    isVegetarian: true,
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Pepperoni, mozzarella, tomato sauce, and oregano",
    price: 14.99,
    image: "/image/photo-1628840042765-356cda07504e.png",
    isVegetarian: false,
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmesan, and goat cheese",
    price: 15.99,
    image: "/image/photo-1574071318508-1cdbab80d002.png",
    isVegetarian: true,
  },
  {
    id: 4,
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
    price: 16.99,
    image: "/image/photo-1565299624946-b28f40a0ae38.png",
    isVegetarian: false,
  },
];

export default function Menu() {
  const handleAddToCart = (pizza) => {
    // TODO: Implement cart functionality
    console.log("Added to cart:", pizza);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
