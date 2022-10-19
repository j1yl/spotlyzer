import { useEffect, useState } from "react";
import styles from "../styles/Artists.module.scss";
import Image from "next/image";

const Artists = () => {
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    const getMyArtists = async () => {
      const res = await fetch("/api/artists");
      const { artists } = await res.json();
      setArtistList(artists);
    };

    getMyArtists();
  });

  return (
    <div className={styles.artists_container}>
      <h2>Your Top Artists From The Last 4 Months</h2>
      <div className={styles.artists}>
        {artistList.map((item) => (
          <div key={item.id} className={styles.artist_card}>
            <Image
              src={item.image.url}
              width={item.image.width / 4}
              height={item.image.height / 4}
              className={styles.artist_card_image}
            />
            <p>
              <span>Name: </span>
              {item.artist}
              <br></br>
              <span>Followers: </span>
              {item.followers}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
