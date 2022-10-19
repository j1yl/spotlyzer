import { useState } from "react";
import styles from "../styles/Artists.module.scss";
import Image from "next/image";

const Artists = () => {
  const [artistList, setArtistList] = useState([]);

  const getMyArtists = async () => {
    const res = await fetch("/api/artists");
    const { artists } = await res.json();
    setArtistList(artists);
  };

  return (
    <div className={styles.artists_container}>
      <button onClick={() => getMyArtists()}>View Top Artists (4 Weeks)</button>
      <div className={styles.artists}>
        {artistList.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image.url}
              width={item.image.width}
              height={item.image.height}
            ></Image>
            <p>{item.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
