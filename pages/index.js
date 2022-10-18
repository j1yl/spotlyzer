import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const { data: session } = useSession();
  const [artist, setArtist] = useState([]);

  const getMyArtists = async () => {
    const res = await fetch("/api/artists");
    const { artists } = await res.json();
    setArtist(artists);
  };

  if (session) {
    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        <button onClick={() => getMyArtists()}>Get my artists</button>
        {artist.map((item) => (
          <div key={item.id}>
            <p>{item.artist}</p>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}
