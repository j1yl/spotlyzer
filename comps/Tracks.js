import { useState } from "react";
import styles from "../styles/Tracks.module.scss";

const Tracks = () => {
  const [tracksList, setTracksList] = useState([]);

  const getMyTracks = async () => {
    const res = await fetch("/api/tracks");
    const { tracks } = await res.json();
    setTracksList(tracks);
  };

  return (
    <div className={styles.tracks_container}>
      <button onClick={() => getMyTracks()}>Get my top tracks</button>
      <div className={styles.tracks}>
        {tracksList.map((item) => (
          <div key={item.id}>
            <p>
              {item.title} by {item.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
