import React, { useState } from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const handleQuantityChange = (itemId, newQuantity) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemoveItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </ul>
      <div className="total">
        <strong>Total: ${calculateTotal().toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default ShoppingCart;
const CartItem = ({ item, onQuantityChange, onRemoveItem }) => {
  return (
    <li className="cart-item">
      <span>{item.name}</span>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
      />
      <span>${(item.price * item.quantity).toFixed(2)}</span>
      <button onClick={() => onRemoveItem(item.id)}>Remove</button>
    </li>
  );
};

export default CartItem;
{
  "checklist": [
    {
      "item": "Display list of products in the cart",
      "completed": true
    },
    {
      "item": "Change quantity of each product",
      "completed": true
    },
    {
      "item": "Remove products from the cart",
      "completed": true
    },
    {
      "item": "Calculate and display the total cost",
      "completed": true
    },
    {
      "item": "Ensure cart updates are reflected in UI",
      "completed": true
    }
  ]
}