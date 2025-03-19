import { useState } from "react";

const ShoppingList = () => {
  // ✅ State to store list of items
  const [items, setItems] = useState([]);
  // ✅ State for item name
  const [name, setName] = useState("");
  // ✅ State for item quantity
  const [quantity, setQuantity] = useState("");

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return; // Prevent empty items

    const newItem = {
      name,
      quantity: parseInt(quantity), 
    };

    setItems((prevItems) => [...prevItems, newItem]); // Add new item to list
    setName(""); // Clear item name input
    setQuantity(""); // Clear quantity input
  };

  return (
    <div className="container">
      <h1 className="title">Shopping List</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </form>

      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item.name} - <span className="quantity">Quantity: {item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
