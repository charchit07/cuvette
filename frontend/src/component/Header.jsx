import React from "react";
import styles from "../Styles/Header.module.css";

const Header = ({ searchQuery, setSearchQuery, numResults, setNumResults }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}> Fitness Influencer </div>
      <div className={styles["search-bar"]}>
        <input
          type="text"
          placeholder="Search for fitness videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles["search-bar"]}
        />
      </div>

      <label>
        Number of Results:
        <input
          type="number"
          value={numResults}
          onChange={(e) => setNumResults(e.target.value)}
          className={styles["num-results-input"]}
        />
      </label>
      <img
        src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHx3b3Jrb3V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
        alt="Profile Image"
        className={styles["profile-image"]}
      />
    </header>
  );
};

export default Header;
