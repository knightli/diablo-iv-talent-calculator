import React from "react";
import Link from "next/link";
import styles from "@/styles/ClassMenu.module.css";

const ClassMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <h2>Select a class to start a build!</h2>
      <ul>
        {["Barbarian", "Druid", "Necromancer", "Rogue", "Sorcerer"].map(
          (className, index) => (
            <li key={index}>
              <Link href={`/talent-tree?class=${className.toLowerCase()}`}>
                {className}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ClassMenu;
