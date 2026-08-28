import { Icon } from "@iconify/react";
import Window from "./window";
import channelData from '@/data/channels.json'

type Folder = keyof typeof channelData

const folders: Folder[] = ["analog-horror", "general", "gameplay"]

export default function ChannelSection(){
    return(
        <div className="grid grid-cols-2 grid-rows-3 gap-y-3 p-2">
            {folders.map((folder) =>{
                const channels = channelData[folder]

                return(
                  <Window key={folder} title={`/home/${folder}`} align="start" button arrow={false} trigger={
                    <div className="group flex flex-col items-center text-sm hover:cursor-pointer">
                      <Icon icon="pixelarticons:folder" className="group-hover:bg-zinc-200/10" width={32} color="#FCC201" />
                      <p className="group-hover:bg-zinc-200/10">{folder}</p>
                    </div>
                  }>
                    <div className="w-md min-h-52 grid grid-cols-4 p-2 gap-5 text-sm">
                        {channels.map((channel) =>{
                            return(
                                <a key={channel.name} className="flex flex-col gap-1 text-center items-center" href={channel.link}>
                                    <img src={`./channels/${channel.img}.webp`} alt={`${channel}-webp`}  width={56}/>
                                    <span>{channel.name}.jpg</span>
                                </a>                           
                            )
                        })}
                    </div>
                  </Window>                    
                )
            })}
        </div>
    )
}