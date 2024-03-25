"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.css"
import { sidebarData } from "@/util/sidebarData";
  

interface SidebarProps {
  active?: string;
  user : string;
}

const Sidebar: React.FC<SidebarProps> = ({user, active}) => {
    const [activeItem, setActiveItem] = useState(active);

    const handleClick = (title: string) => {
      setActiveItem(title);
    };
  

  return (
    user === "super admin" && (
        <aside className={`${styles.sidebar}`}>
           <h1 className={styles.warehouse}>Warehouse Management</h1>
          <div className={styles.container}>
          
            <nav className={styles.nav}>
              {sidebarData.map((item) => (
                <div
                  key={item.id}
                  className={`
                ${styles.sidebarItem}
                ${activeItem === item.title ? styles.activeItem : ""}
              `}
                  onClick={() => handleClick(item.title)}
                >
                  <Link href={item.navigateLink}>
                   
                    <span className={styles.iconTitle}>{item.title}</span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </aside>)
      );
};

export default Sidebar;


