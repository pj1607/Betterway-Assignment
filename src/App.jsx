import { useRef } from "react";
import ProductList from "./components/products/ProductList";
import Filters from "./components/products/Filters";
import Cart from "./components/cart/Cart";
import useProducts from "./hooks/useProducts";
import useCart from "./hooks/useCart";

function App() {
  const {
    filteredProducts,
    filters,
    setFilters,
    categories,
    clearFilters,
    loading,
  } = useProducts();

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  // Ref to cart container
  const cartRef = useRef(null);

  // Wrapped addToCart function to scroll + highlight cart
const handleAddToCart = (product) => {
  addToCart(product);

  // Wait for cart to render
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 100); // 100ms is enough for React to render the updated cart
};

  if (loading) return <p>Loading...</p>;

  return (
    <div className="app">
      <h1>Mini E-Commerce</h1>

      <Filters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        clearFilters={clearFilters}
      />

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart} // use wrapped function
      />

      {/* Cart with ref */}
      <div ref={cartRef}>
        <Cart
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQty={updateQuantity}
          totalItems={totalItems}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default App;
