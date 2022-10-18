import { getSession } from "next-auth/react";
import { getUsersTopArtists } from "../../lib/spotify";

const handler = async (req, res) => {
  const {
    token: { accessToken },
  } = await getSession({ req });
  const response = await getUsersTopArtists(accessToken);
  const { items } = await response.json();

  const artists = items.slice(0, 5).map((artist) => ({
    artist: artist.name,
    rank: artist.popularity,
    genres: artist.genres,
    followers: artist.followers.total,
    url: artist.external_urls.spotify,
    id: artist.id,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ artists });
};

export default handler;
