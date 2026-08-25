import { ReactNode } from "react"

interface CardProps{
    children: ReactNode
    details?: string
}

export default function SimpleCard({ children, details }: CardProps){
    return(
        <div className={`${details} py-2 px-3 text-white border border-white`} >
            {children}
        </div>
    )
}