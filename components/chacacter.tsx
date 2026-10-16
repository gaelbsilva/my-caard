'use client'

import { useState, useEffect } from "react";

export default function Chacacter(){
    const [ blinking, setBlinking ] = useState(false)

    useEffect(() => {
        const interval = setInterval(() =>{
            setBlinking(true)
            setTimeout(() => setBlinking(false), 100)
        }, 2000)

        return () => clearInterval(interval);
    }, [])

    return(
        <img className="cursor-pointer hover:animate-bounce-sm" src={blinking ? 'chacacter/gael-2.png' : 'chacacter/gael-1.png'} width={150} alt="chacacter-gael-png" />
    )
}