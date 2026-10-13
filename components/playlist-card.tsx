"use client";

import { useEffect, useState } from "react";
import Card from "./card";

interface Track {
  name: string;
  artist: string;
  image: string;
  link: string;
}

export default function PlaylistCard() {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch("/api/spotify-playlist")
      .then((res) => res.json())
      .then(setTracks);
  }, []);

  return(
    <Card title="my playlist" className="h-75" details="h-64 flex flex-col gap-2 overflow-y-auto">
      {tracks.map((track) => (
        <a key={track.link} href={track.link} target="_blank" className="flex items-center gap-2">
          <img src={track.image} alt={track.name} width={50} />
          <div>
            <p className="text-white">{track.name}</p>
            <p className="text-xs text-zinc-400">{track.artist}</p>
          </div>
        </a>
      ))}
    </Card>
  );
}