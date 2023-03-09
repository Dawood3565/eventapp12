import styles from "../styles/nav.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Event Management</h1>
      </div>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/" className={`${styles.navbarLink} ${styles.btn}`}>
            Home
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/" className={`${styles.navbarLink} ${styles.btn}`}>
            Blog
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/signup" className={`${styles.navbarLink} ${styles.btn}`}>
            Signup
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/login" className={`${styles.navbarLink} ${styles.btn}`}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
