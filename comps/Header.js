import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <nav className={styles.header_container}>
          <h2 className={styles.logo}>
            Spot<span>lyzer</span>
          </h2>
          <div className={styles.nav_links_container}>
            <Link href="/" className={styles.nav_links}>
              Home
            </Link>
            <Link href="/about" className={styles.nav_links}>
              About
            </Link>
            <Link href="mailto: lefodev@gmail.com" className={styles.nav_links}>
              Contact
            </Link>
          </div>
          <div className={styles.authentication_container}>
            {/* <p className={styles.email}>Logged in as {session?.token?.email}</p> */}
            <button className={styles.login_btn} onClick={() => signOut()}>
              Logout
            </button>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className={styles.header_container}>
        <h2 className={styles.logo}>
          Spot<span>lyzer</span>
        </h2>
        <div className={styles.nav_links_container}>
          <li>
            <Link href="/" className={styles.nav_links}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.nav_links}>
              About
            </Link>
          </li>
          <li>
            <Link href="mailto: lefodev@gmail.com" className={styles.nav_links}>
              Contact
            </Link>
          </li>
        </div>
        <div className={styles.authentication_container}>
          <button className={styles.login_btn} onClick={() => signIn()}>
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
