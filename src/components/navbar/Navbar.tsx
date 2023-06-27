import {
  BsBellFill,
  BsFillChatDotsFill,
  BsPinterest,
  BsSearch,
} from "react-icons/bs";
import styles from "./navbar.module.css";
import { IconContext } from "react-icons";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <IconContext.Provider value={{ color: "var(--red)", size: "1.2rem" }}>
        <button className={styles.navbarButton}>
          <BsPinterest />
        </button>
      </IconContext.Provider>
      <div className={styles.searchWrapper}>
        <div className={styles.searchIcon}>
          <BsSearch />
        </div>
        <input
          placeholder="Search..."
          className={styles.input}
          aria-label="search"
        />
      </div>
      <IconContext.Provider value={{ size: "1.5rem", color: "#5f5f5f" }}>
        <button>
          <BsBellFill />
        </button>
        <button>
          <BsFillChatDotsFill />
        </button>
      </IconContext.Provider>
    </nav>
  );
}
