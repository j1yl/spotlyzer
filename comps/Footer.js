import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <Link href="mailto: lefodev@gmail.com">lefodev@gmail.com</Link>
      {/* <div className={styles.social_media}></div> */}
    </div>
  );
};

export default Footer;
