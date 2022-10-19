import { useState } from "react";
import styles from "../styles/Artists.module.scss";

const Artists = () => {
  const [artistList, setArtistList] = useState([]);

  const getMyArtists = async () => {
    const res = await fetch("/api/artists");
    const { artists } = await res.json();
    setArtistList(artists);
  };

  return (
    <div className={styles.artists_container}>
      <button onClick={() => getMyArtists()}>Get my top artists</button>
      <div className={styles.artists}>
        {artistList.map((item) => (
          <div key={item.id}>
            <p>{item.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
