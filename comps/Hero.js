import styles from "../styles/Hero.module.scss";
import { useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className={styles.hero_container}>
          <h1>
            Your <span>familiar</span> music libraries, <span>curated</span>{" "}
            with <span>clarity</span>.
          </h1>
          <p>
            Welcome! You are logged in as: <span>{session?.token?.email}</span>
          </p>
        </div>
      </>
    );
  }

  return (
    <div className={styles.hero_container}>
      <h1>
        Your <span>familiar</span> music libraries, <span>curated</span> with{" "}
        <span>clarity</span>.
      </h1>
    </div>
  );
};

export default Hero;
