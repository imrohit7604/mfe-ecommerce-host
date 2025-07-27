// src/App.jsx
import React, { useState } from 'react';
import "./App.css";
import RemoteComponent from './components/RemoteComponent';


const REMOTES = {
  search: {
    url: process.env.REACT_APP_SEARCH_URL || "https://mfe-ecommerce-search.vercel.app/remoteEntry.js",
    scope: "search",
    module: "./Search"
  },
  cart: {
    url: process.env.REACT_APP_CART_URL || "https://mfe-ecommerce-cart.vercel.app/remoteEntry.js",
    scope: "cart",
    module: "./Cart"
  },
  analytics: {
    url: process.env.REACT_APP_ANALYTICS_URL || "https://mfe-ecommerce-analytics.vercel.app/remoteEntry.js",
    scope: "analytics",
    module: "./Analytics"
  }
};


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🧭 Host App</h1>

      <div className="responsive-grid">
        <RemoteComponent
          {...REMOTES.search}
          onAddToCart={handleAddToCart}
        />
        <RemoteComponent
          {...REMOTES.cart}
          items={cartItems}
        />
        <RemoteComponent
          {...REMOTES.analytics}
          items={cartItems}
        />
      </div>
    </div>
  );
};

export default App;
