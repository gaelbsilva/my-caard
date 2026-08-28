import { Icon } from "@iconify/react";
import SimpleCard from "./simple-card";
import gameData from '@/data/games.json'
import { useState } from "react";

export default function GameSection(){
    const [ index, setIndex ] = useState(0)
    const game = gameData[index]

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? gameData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === gameData.length - 1 ? 0 : prev + 1));
    };

    return(
        <SimpleCard details="w-md space-y-3">
            <div className="flex justify-center py-2">
                <span className="bg-blue-700 px-3 py-2 border border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,255)] font-press-start">
                    <p className="text-sm">MY GAMES</p>
                </span>
            </div>

            <div className="flex justify-center gap-5">
                <button>
                    <Icon onClick={handlePrev} className="rotate-180 cursor-pointer text-blue-400/50 hover:text-blue-600 transition-colors"
                     icon={'pixelarticons:chevron-right'} width={40}/>
                </button>
                <img className="border border-white hover:border-blue-500 transition-colors" src={`./games/${game.img}.webp`} alt={`${game.img}-webp`}  width={100}/>
                <button>
                    <Icon onClick={handleNext} className="cursor-pointer text-blue-400/50 hover:text-blue-600 transition-colors"
                     icon={'pixelarticons:chevron-right'} width={40}/>
                </button>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                    <span className="px-3 py-2 bg-blue-700 border border-white text-xs font-press-start">{game.nome}</span>
                </div>
                <div className="flex justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        <p>historia</p>
                        <p>jogabilidade</p>
                        <p>traço</p>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <span className="w-30 h-5 flex p-0.5 border border-white bg-[#111]"><span style={{ width: `${game.historia}%` }} className={`h-full bg-blue-700 border border-blue-500`}></span></span>
                      <span className="w-30 h-5 flex p-0.5 border border-white bg-[#111]"><span style={{ width: `${game.jogabilidade}%` }} className={`h-full bg-blue-700 border border-blue-500`}></span></span>
                      <span className="w-30 h-5 flex p-0.5 border border-white bg-[#111]"><span style={{ width: `${game.traco}%` }} className={`h-full bg-blue-700 border border-blue-500`}></span></span>
                    </div>
                </div>
            </div>        
        </SimpleCard>
    )
}