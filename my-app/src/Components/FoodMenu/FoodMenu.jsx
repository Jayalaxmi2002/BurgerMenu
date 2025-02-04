import React, { useState } from "react";
import "./FoodMenu.css"; // Removed the extra space in the import

// Category list with images
const categories = [
    { name: "Donuts", image: "https://www.allrecipes.com/thmb/lkmpKIBFPRbfATPBoR8E57KimqM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45921-crispy-and-creamy-doughnuts-DDMFS-4x3-4266734872014eeebaeddbe56452e18d.jpg" },
    { name: "Burger", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvBSYpdrmjC6s63P5oWgTiU4gPl36dkdVfQ&s" },
    { name: "Ice", image: "https://www.julieseatsandtreats.com/wp-content/uploads/2020/06/Rainbow-Ice-Cream-14-of-16.jpg" },
    { name: "Potato", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/10/23/17/mcdonalds-sweet-potato.jpg?width=1200&height=1200&fit=crop" },
    { name: "Fuchka", image: "https://cosmosgroup.sgp1.digitaloceanspaces.com/news/details/6897582.webp" },
    { name: "Pizza", image: "https://imgmediagumlet.lbb.in/media/2023/02/63e39a8dc9ae884e143db091_1675860621236.jpg" },
    { name: "Hot dog", image: "https://cdn.jwplayer.com/v2/media/25Ez4pc2/poster.jpg?width=720" },
    { name: "Chicken", image: "https://www.simplyrecipes.com/thmb/Sw2rWO2l615LjOnmUyDIWjAMDKg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__04__honey-glazed-roast-chicken-horiz-a-1800-2057270028084ff2bdb54fcb0f2d3227.jpg" }
];

// Burger items
const burgers = [
    { id: 1, name: "Vegetable Burger", price: 25, oldPrice: 30, rating: 2.5, image: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg" },
    { id: 2, name: "Meat Burger", price: 28, oldPrice: 35, rating: 2.4, image: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" },
    { id: 3, name: "Cheese Burger", price: 32, oldPrice: 38, rating: 4.7, image: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg" },
    { id: 4, name: "Vegetable Burger", price: 30, oldPrice: 33, rating: 4.3, image: "https://cdn.veeg.co/app/uploads/2020/02/19143252/Pumpkin_Seed_Veggie_Burger_01_web_square.jpg" },
    { id: 5, name: "Bean Burger", price: 15, oldPrice: 20, rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XRLlYjr0l_CZYs6lQTSCpKW8PA3ggeZlhQ&s" },
    { id: 6, name: "Wild Salmon Burger", price: 40, oldPrice: 50, rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJIHCNoPOtvqKKG6Ik8ruCHp1oqT-PedFYg&s" }
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