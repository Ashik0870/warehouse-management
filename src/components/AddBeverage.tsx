"use client";

import { useState } from "react";
import styles from "./AddItems.module.css";
import { push, ref, set } from "firebase/database";
import { database } from "../app/firebaseConfig";
import { useRouter } from "next/navigation";

const AddBeverage: React.FC = () => {
    const router = useRouter();
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const foodRef = ref(database, "beverage");
      const newDatRef = push(foodRef);

      set(newDatRef, {
        id:id,
        "productName": productName,
        quantity: quantity,
        available: quantity,
        availability: 100,
      });
      setId("");
      setProductName("");
      setQuantity("");
      alert("Sucessfully added");
      router.push("/beverages");
    } catch (err) {
      alert("Error occured");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              <label htmlFor="id">ID:</label>
            </td>
            <td>
              <input
                className={styles.input}
                type="text"
                id="id"
                value={id}
                onChange={handleIdChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="productName">Product Name:</label>
            </td>
            <td>
              <input
                className={styles.input}
                type="text"
                id="productName"
                value={productName}
                onChange={handleProductNameChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="quantity">Quantity:</label>
            </td>
            <td>
              <input
                className={styles.input}
                type="text"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBeverage;
