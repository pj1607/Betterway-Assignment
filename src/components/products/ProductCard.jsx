import React, { memo } from "react";

function ProductCard({ product, onAddToCart }) {
  const { name, price, category, stock } = product;

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{category}</p>
      <p>₹{price}</p>
      {/* Add className based on stock */}
      <p className={stock > 0 ? "in-stock" : "out-stock"}>
        {stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <button
        disabled={stock === 0}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default memo(ProductCard);
