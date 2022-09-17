import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}> Copyright © 2022 My Meals</h1>
      <Link href="https://github.com/DoodleDeBug/my-meals">
        <p className={styles.repo}>Github Repo</p>
      </Link>
    </div>
  );
};

export default Footer;
