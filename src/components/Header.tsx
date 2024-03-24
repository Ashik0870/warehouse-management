"use client";

import styles from "./header.module.css";
import { useEffect, useState } from "react";
import userImage from "../images/user.png";
import Image from "next/image";

interface HeaderProp {}

const Header: React.FC<HeaderProp> = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("User") ?? "";
    setUser(storedUser);
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p>
          Hello,
          <span className={styles.username}>
            {" "}
            <b>{user || "Guest"}</b>{" "}
          </span>
        </p>
        <div className={styles.user_photo}>
          <Image src={userImage} alt="User Photo" width={40} height={40} />
        </div>
      </div>
    </header>
  );
};

export default Header;
