'use client'

import { Icon } from "@iconify/react";
import SimpleCard from "./simple-card";
import { useRef, useState } from "react";

export default function MusicCard(){
    const audioRef = useRef<HTMLAudioElement>(null)
    const [ playing, setPlaying ] = useState(false)
    const [ muted, setMuted ] = useState(false)

    const togglePlay = () =>{
        if (playing) {
            audioRef.current?.pause();
            setPlaying(false)
        } else {
            audioRef.current?.play();
            setPlaying(true)
        }
    }

    const toggleMute = () =>{
        if(audioRef.current){
            audioRef.current.muted = !muted
            setMuted(!muted)
        }
    }

    return(
        <SimpleCard details="flex items-center w-1/3 h-40 gap-2">
            <audio ref={audioRef} src={'/music/love-is-a-day.wav'} loop />
            <img className="h-full" src="/music/love-is-a-day.webp" alt=""/>

            <div className="w-full h-full flex flex-col justify-between">
                <div className="flex flex-col">
                    <span className="text-lg">Love is a day</span>
                    <span className="text-zinc-400">Cuco</span>
                </div>

                <div className="flex justify-end gap-2">
                    {playing ? (
                            <Icon className="cursor-pointer" onClick={togglePlay} icon={'pixelarticons:pause'} width={26}/>
                        ) : (
                            <Icon className="cursor-pointer" onClick={togglePlay} icon={'pixelarticons:play'} width={26}/>
                        )}
                    { muted ? (
                            <Icon className="cursor-pointer" onClick={toggleMute} icon={'pixelarticons:volume-x'} width={26}/>
                        ) : (
                            <Icon className="cursor-pointer" onClick={toggleMute} icon={'pixelarticons:volume-2'} width={26}/>
                        )}
                    <a href="https://open.spotify.com/intl-pt/track/1ucnuV88gFTfR3BalmznDk?si=0334cb7fbfb64d43" target="blank">
                        <Icon className="cursor-pointer" icon={'pixelarticons:headphone'} width={26}/>
                    </a>      
                </div>
            </div>
        </SimpleCard>
    )
}