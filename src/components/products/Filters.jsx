function Filters({
  filters,
  setFilters,
  categories,
  clearFilters,
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products"
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      <select
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      >
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={filters.sort}
        onChange={(e) =>
          setFilters({ ...filters, sort: e.target.value })
        }
      >
        <option value="">Sort by Price</option>
        <option value="low">Low -> High</option>
        <option value="high">High -> Low</option>
      </select>

      <button onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default Filters;
