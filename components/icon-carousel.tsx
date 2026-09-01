import SimpleCard from "./simple-card";
import nextIcon from "@iconify-icons/devicon/nextjs"
import tsIcon from "@iconify-icons/devicon/typescript"
import figmaIcon from "@iconify-icons/devicon/figma"
import gitIcon from "@iconify-icons/devicon/git"
import vsCodeIcon from "@iconify-icons/devicon/vscode"
import mintIcon from "@iconify-icons/devicon/linuxmint"
import { Icon } from "@iconify/react";

const stacks = [
    nextIcon, tsIcon, figmaIcon, gitIcon, vsCodeIcon, mintIcon
]

export default function IconCarousel(){
    return(
        <SimpleCard details="w-full h-16 my-2 overflow-hidden">
            <div className="w-max h-full flex items-center animate-carousel gap-32 hover:[animation-play-state:paused]">
                {stacks.map((icon, i) => (
                    <Icon key={`a-${i}`} icon={icon} width={25}/> 
                ))}
                {stacks.map((icon, i) => (
                    <Icon key={`b-${i}`} icon={icon} width={25}/> 
                ))}
            </div>
        </SimpleCard>
    )
}