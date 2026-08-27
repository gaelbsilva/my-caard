"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Icon } from "@iconify/react"
import { ReactNode } from "react"

interface WindowProps{
    trigger: ReactNode
    children: ReactNode
    title: string
    details?: string
    button?: boolean
    arrow?: boolean
    align?: "start" | "center" | "end";
}

export default function Window({ children,  trigger, title, details, button, align='end', arrow=true}: WindowProps){
    return(
        <PopoverPrimitive.Root>
            <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
            <PopoverPrimitive.Portal>
                <PopoverPrimitive.Content
                    align={align}
                    sideOffset={8}
                    className="min-w-60 max-w-96 bg-[#111111] border border-blue-700 z-50"
                    >
                    <div className={`bg-blue-700 w-full py-1 px-2 flex justify-between items-center text-white`}>
                        <h3>{title}</h3>
                        {button && <PopoverPrimitive.Close className="flex gap-1" aria-label="fechar">
                            <Icon className="cursor-pointer" icon={'pixelarticons:minus-box'} width={20} color="yellow"/>
                            <Icon className="cursor-pointer" icon='dinkie-icons:black-cross-square' width={18} color="red"/>
                        </PopoverPrimitive.Close>}
                    </div>
                    <div className={`${details} p-2 text-white`}>
                        {children}
                    </div>
                    {arrow && <PopoverPrimitive.Arrow className="fill-blue-700" width={16} height={8}/>}   
                 </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
    )
}