import { useEffect, useState } from "react";
import { applyFilters } from "../utils/productUtils";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    sort: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.slice(0, 15).map((item) => ({
          id: item.id,
          name: item.title,
          price: Math.round(item.price * 80),
          category: item.category,
          stock: Math.floor(Math.random() * 6),
        }));
        setProducts(formatted);
        setLoading(false);
      });
  }, []);

  const filteredProducts = applyFilters(products, filters);

  const categories = [
    ...new Set(products.map((p) => p.category)),
  ];

  const clearFilters = () =>
    setFilters({ search: "", category: "all", sort: "" });

  return {
    products,
    filteredProducts,
    filters,
    setFilters,
    categories,
    clearFilters,
    loading,
  };
}

export default useProducts;
