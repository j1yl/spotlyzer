import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <nav className={styles.header_container}>
          <h2>
            Spot<span>lyzer</span>
          </h2>
          <div className={styles.nav_links}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="mailto: lefodev@gmail.com">Contact</Link>
          </div>
          <div className={styles.authentication}>
            <button className={styles.login_btn} onClick={() => signOut()}>
              Logout
            </button>
            <p className={styles.email}>{session?.token?.email}</p>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className={styles.header_container}>
        <h2>Spotlyzer</h2>
        <div className={styles.nav_links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="mailto: lefodev@gmail.com">Contact</Link>
        </div>
        <div className={styles.authentication}>
          <button className={styles.login_btn} onClick={() => signIn()}>
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;