import { useSession, signIn, signOut } from "next-auth/react";
import Hero from "../comps/Hero";
import Artists from "../comps/Artists";
import Tracks from "../comps/Tracks";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const { data: session } = useSession();
  // const [artist, setArtist] = useState([]);

  // const getMyArtists = async () => {
  //   const res = await fetch("/api/artists");
  //   const { artists } = await res.json();
  //   setArtist(artists);
  // };

  // {artist.map((item) => (
  //   <div key={item.id}>
  //     <p>{item.artist}</p>
  //   </div>
  // ))}
  if (session) {
    return (
      <>
        <Hero />
        <Artists />
        <Tracks />
      </>
    );
  }
  return (
    <>
      <Hero />
    </>
  );
}
