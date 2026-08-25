import { ReactNode } from "react"

interface CardProps{
    children: ReactNode
    title: string
    className?: string
    details?: string
}

export default function Card({ children, title, className, details }: CardProps){
    return(
        <div className={`${className} border border-blue-700`}>
            <div className="bg-blue-700 w-full py-1.5 px-3 flex items-center text-white ">
                <h3>{title}</h3>
            </div>
            <div className={`${details} p-2`}>
                {children}
            </div>
        </div>  
    )
}