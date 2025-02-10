"use client";

import { useState } from "react"
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
    const [activeTab, setActiveTab] = useState("");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.header}>
          <h1 className={styles.title}><Link href="/">Turbys</Link></h1>
          <nav className={styles.nav}>
            <ul className={styles.tabs}>
              <li>
                <Link
                  href="/products"
                  className={`${styles.tab} ${activeTab === "products" ? styles.active : ""}`}
                  onClick={() => handleTabClick("catalog")}
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className={`${styles.tab} ${activeTab === "categories" ? styles.active : ""}`}
                  onClick={() => handleTabClick("categories")}
                >
                  Категории
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className={`${styles.tab} ${activeTab === "about" ? styles.active : ""}`}
                  onClick={() => handleTabClick("about")}
                >
                  О нас
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
}

export default Header;