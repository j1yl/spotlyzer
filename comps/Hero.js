import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <h1>
        Your <span>familiar</span> music libraries, <span>curated</span> with{" "}
        <span>clarity</span>
      </h1>
    </div>
  );
};

export default Hero;
