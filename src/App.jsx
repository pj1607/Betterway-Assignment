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

 
  const cartRef = useRef(null);


const handleAddToCart = (product) => {
  addToCart(product);

  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 100);
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
        onAddToCart={handleAddToCart}
      />

  
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
