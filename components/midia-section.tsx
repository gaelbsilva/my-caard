import midiaData from '@/data/midias.json'

type Categories = keyof typeof midiaData

const categories: Categories[] = ['films', 'series', 'animes', 'cartoon']

interface Midia{
    name: string
    img: string
}

interface MidiaProps{
    category: Categories
}

export default function MidiaSection({ category }: MidiaProps){
    const items: Midia[] = midiaData[category]

    return(
        <div className="w-full grid grid-cols-4 grid-rows-2 place-items-center p-2 border border-blue-700">
            {items.map((item) =>{
                return(                
                    <div key={item.name} className="flex flex-col items-center gap-1 text-center text-white text-xs">
                        <img className="h-28 border border-white hover:border-blue-500 transition-colors" src={`${item.img}.webp`} alt="" width={81} />
                        <p className='max-w-30 truncate'>{item.name}.mp4</p>
                    </div>
                )

            })}
        </div>

        )
}