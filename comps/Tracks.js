import { useEffect, useState } from "react";
import styles from "../styles/Tracks.module.scss";

const Tracks = () => {
  const [tracksList, setTracksList] = useState([]);

  useEffect(() => {
    const getMyTracks = async () => {
      const res = await fetch("/api/tracks");
      const { tracks } = await res.json();
      setTracksList(tracks);
    };

    getMyTracks();
  });

  return (
    <div className={styles.tracks_container}>
      <h2>Your Top Tracks From The Last 4 Months</h2>
      <div className={styles.tracks}>
        {tracksList.map((item, index) => (
          <div key={item.id}>
            <p>
              {index + 1}. <span>{item.title}</span> - {item.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
