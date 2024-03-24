"use client";

import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import fav from "../images/warehouse.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [user, setUser] = useState("");

  const navigator = useRouter();

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };  

  useEffect(() => {
    localStorage.setItem("User", user);
  },[user]);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigator.push("/dashboard");
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={fav} alt="Warehouse Symbol" />
      </div>
      <h1 className={styles.title}>Warehouse Management System</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formField}>
            <label className={styles.label} htmlFor="username">
              Username:
            </label>
            <input
              className={styles.input}
              type="text"
              id="username"
              name="username"
              onChange={handleUserChange}
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
