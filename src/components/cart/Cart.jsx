import CartItem from "./CartItem";

function Cart({
  cart,
  onRemove,
  onUpdateQty,
  totalItems,
  totalPrice,
}) {
  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onUpdateQty={onUpdateQty}
        />
      ))}

      <hr />

      <p>Total Items: {totalItems}</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
}

export default Cart;
