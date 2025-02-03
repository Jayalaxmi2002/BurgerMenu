import React, { useState } from "react";
import "./FoodMenu.css"; // Removed the extra space in the import

// Category list with images
const categories = [
    { name: "Donuts", image: "https://www.allrecipes.com/thmb/lkmpKIBFPRbfATPBoR8E57KimqM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45921-crispy-and-creamy-doughnuts-DDMFS-4x3-4266734872014eeebaeddbe56452e18d.jpg" },
    { name: "Burger", image: "/images/burger-icon.png" },
    { name: "Ice", image: "/images/ice-icon.png" },
    { name: "Potato", image: "/images/potato-icon.png" },
    { name: "Fuchka", image: "/images/fuchka-icon.png" },
    { name: "Pizza", image: "/images/pizza-icon.png" },
    { name: "Hot dog", image: "/images/hotdog-icon.png" },
    { name: "Chicken", image: "/images/chicken-icon.png" }
];

// Burger items
const burgers = [
    { id: 1, name: "Vegetable Burger", price: 25, oldPrice: 30, rating: 4.5, image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg" },
    { id: 2, name: "Meat Burger", price: 28, oldPrice: 35, rating: 4.2, image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" },
    { id: 3, name: "Cheese Burger", price: 32, oldPrice: 38, rating: 4.7, image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg" },
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
                        <div style={{ borderRadius: "10px", backgroundColor:"rgb(218 224 228 / 38%)" }}>
                            <img src={burger.image} alt={burger.name} className="burger-image" />
                        </div>
                        <div style={{textAlign:"left", fontSize:"22px"}}>
                        <h3>{burger.name}</h3>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div className="price">
                            ${burger.price} <span className="old-price">${burger.oldPrice}</span>
                        </div>
                        <p className="rating">⭐ {burger.rating}</p>
                        </div>
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