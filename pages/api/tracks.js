import { getSession } from "next-auth/react";
import { getUsersTopTracks } from "../../lib/spotify";

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });
  const response = await getUsersTopTracks(accessToken);
  const { items } = await response.json();

  const tracks = items.slice(0, 15).map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    url: track.external_urls.spotify,
    coverImage: track.album.images[1],
    id: track.id,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ tracks });
};

export default handler;
