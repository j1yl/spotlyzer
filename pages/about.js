import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.intro_container}>
        <h1>About</h1>
        <p>
          Spotlyzer is a web application that allows users to login through
          their Spotify account. Spotlyzer then fetches data regarding their
          Spotify profile and displays them in an orderly fashion to the user.
          During this interaction between the user and the client, their
          password is never stored or viewed. The OAuth2 works by logging
          through Spotify's platform.
        </p>
        <p>
          Due to Spotify API's restrictions, hobbyist/school projects are not
          allowed quota's extensions, meaning that I can have a maximum of 25
          regular users.
        </p>
      </div>
    </div>
  );
};

export default About;
