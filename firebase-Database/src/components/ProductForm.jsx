import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productThunks";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.category.trim() ||
      !form.quantity ||
      !form.price
    ) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addProduct(form));

    setForm({
      name: "",
      category: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;