function CartItem({ item, onRemove, onUpdateQty }) {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>

      <div className="qty-controls">
        <button onClick={() => onUpdateQty(item.id, -1)}>
          -
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => onUpdateQty(item.id, 1)}>
          +
        </button>
      </div>

    <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>

    </div>
  );
}

export default CartItem;
