import { useSession } from "next-auth/react";
import Hero from "../comps/Hero";
import Artists from "../comps/Artists";
import Tracks from "../comps/Tracks";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.user}>
        <Hero />
        <Artists />
        <Tracks />
      </div>
    );
  }
  return (
    <div className={styles.no_user}>
      <Hero />
    </div>
  );
}
