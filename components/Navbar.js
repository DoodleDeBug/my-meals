import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <p className={styles.title}>My Meals</p>
      </div>

      <ul className={styles.navContent}>
        <Link href="/">
          <li className={(styles.name, styles.buttons)}>Home</li>
        </Link>

        <Link href="/about">
          <li className={(styles.name, styles.buttons)}>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
