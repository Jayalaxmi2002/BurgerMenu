import React, { useState } from "react";
import "./FoodMenu.css"; // Removed the extra space in the import

// Category list with images
const categories = [
//   { name: "Donuts", image: "/images/donut-icon.png" },
//   { name: "Burger", image: "/images/burger-icon.png" },
//   { name: "Ice", image: "/images/ice-icon.png" },
//   { name: "Potato", image: "/images/potato-icon.png" },
//   { name: "Fuchka", image: "/images/fuchka-icon.png" },
//   { name: "Pizza", image: "/images/pizza-icon.png" },
//   { name: "Hot dog", image: "/images/hotdog-icon.png" },
//   { name: "Chicken", image: "/images/chicken-icon.png" }
];

// Burger items
const burgers = [
  { id: 1, name: "Vegetable Burger", price: 25, oldPrice: 30, rating: 4.5, image: "/images/veg-burger.png" },
  { id: 2, name: "Meat Burger", price: 28, oldPrice: 35, rating: 4.2, image: "/images/meat-burger.png" },
  { id: 3, name: "Cheese Burger", price: 32, oldPrice: 38, rating: 4.7, image: "/images/cheese-burger.png" },
  { id: 4, name: "Vegetable Burger", price: 30, oldPrice: 33, rating: 4.3, image: "/images/veg-burger-2.png" },
  { id: 5, name: "Bean Burger", price: 15, oldPrice: 20, rating: 4.0, image: "/images/bean-burger.png" },
  { id: 6, name: "Wild Salmon Burger", price: 40, oldPrice: 50, rating: 4.8, image: "/images/salmon-burger.png" }
];

const FoodMenuMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Burger");

  return (
    <div className="burger-menu">
      {/* Heading */}
      <h2 className="explore-title">Explore Categories</h2>

      {/* Categories */}
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-btn ${activeCategory === category.name ? "active" : ""}`}
            onClick={() => setActiveCategory(category.name)}
          >
            <img src={category.image} alt={category.name} className="category-icon" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="filter-tabs">
        <button className="active">Popular</button>
        <button>Recent</button>
      </div>

      {/* Burger List */}
      <div className="burger-list">
        {burgers.map((burger) => (
          <div key={burger.id} className="burger-card">
            <img src={burger.image} alt={burger.name} className="burger-image" />
            <h3>{burger.name}</h3>
            <p className="price">
              ${burger.price} <span className="old-price">${burger.oldPrice}</span>
            </p>
            <p className="rating">⭐ {burger.rating}</p>
            <div className="actions">
              <button className="wishlist">Wishlist</button>
              <button className="order-now">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenuMenu;