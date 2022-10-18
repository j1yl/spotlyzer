import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header_container}>
      <h2>Spotlyzer</h2>
      <div className={styles.nav_links}>
        <Link href="/about">About</Link>
        <Link href="/tracks">Tracks</Link>
        <Link href="/artists">Artists</Link>
      </div>
    </nav>
  );
};

export default Header;
