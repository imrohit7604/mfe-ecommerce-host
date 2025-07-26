// src/App.jsx
import React, { useState, Suspense, lazy } from 'react';

const Search = lazy(() => import('search/Search'));
const Cart = lazy(() => import('cart/Cart'));
const Analytics = lazy(() => import('analytics/Analytics'));

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🧭 Host App</h1>

      <div className="grid grid-cols-3 gap-4">
        <Suspense fallback={<div>Loading Search...</div>}>
          <Search onAddToCart={handleAddToCart} />
        </Suspense>

        <Suspense fallback={<div>Loading Cart...</div>}>
          <Cart items={cartItems} />
        </Suspense>

        <Suspense fallback={<div>Loading Analytics...</div>}>
          <Analytics items={cartItems} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
