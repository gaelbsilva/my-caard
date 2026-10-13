import { NextResponse } from "next/server";

async function getAccessToken(){
  const res = await fetch("https://accounts.spotify.com/api/token",{
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  const data = await res.json();
  return data.access_token as string;
}

export async function GET(){
  const accessToken = await getAccessToken();

  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${process.env.SPOTIFY_PLAYLIST_ID}/items`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  const data = await res.json();

  const tracks = data.items.map((entry: any) => ({
    name: entry.item.name,
    artist: entry.item.artists?.map((a: any) => a.name).join(", "),
    image: entry.item.album?.images?.[0]?.url,
    link: entry.item.external_urls?.spotify,
  }));

  return NextResponse.json(tracks);
}

