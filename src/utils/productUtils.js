export function applyFilters(products, filters) {
  let result = [...products];

  if (filters.search) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  if (filters.category !== "all") {
    result = result.filter(
      (p) => p.category === filters.category
    );
  }

  if (filters.sort === "low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "high") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}
