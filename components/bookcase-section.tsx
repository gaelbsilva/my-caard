import Window from "./window";

export default function BookcaseSection(){
    return(
        <div className="w-full h-24 flex justify-center items-end border border-white hover:border-blue-400">
            <div className="flex w-2/3 items-baseline">
                <Window title="BOOK" details="flex items-center gap-3" button trigger={
                    <div className="w-5 h-16 bg-orange-600 hover:border hover:border-white cursor-pointer"></div>
                }>
                    <div className="">
                        <img src="/books/aftg.jpg" alt=""  width={80}/>
                    </div>

                    <div className="flex flex-col max-w-60 gap-1">
                        <p className="text-orange-400">a toca das raposas</p>
                        <p>atualmente estou lendo esta sequencia de livros, parece muito interessante.</p>
                    </div>
                </Window>

                <Window title="BOOK" details="flex items-center gap-3" button trigger={
                    <div className="w-2 h-13 bg-amber-200 hover:border hover:border-white cursor-pointer"></div>
                }>
                    <div className="">
                        <img src="/books/aftg.jpg" alt=""  width={80}/>
                    </div>

                    <div className="flex flex-col gap-1 max-w-60">
                        <p className="text-amber-200">o pequeno príncipe</p>
                        <p>este é meu livro preferido, tenho um carinho muito grande por ele desde pequeno!</p>
                    </div>
                </Window>

                <Window title="BOOK" details="flex items-center gap-3" button trigger={
                    <div className="w-3 h-14 bg-zinc-600 hover:border hover:border-white cursor-pointer"></div>
                }>
                    <div className="">
                        <img src="/books/aftg.jpg" alt=""  width={80}/>
                    </div>

                    <div className="flex flex-col gap-1 max-w-60">
                        <p className="text-zinc-400">shotgun boy</p>
                        <p>este é um manhua que gostei muito, ele é do gênero terror e conseguiu me prender do inicio ao fim.</p>
                    </div>
                </Window>

                <Window title="BOOK" details="flex items-center gap-3" button trigger={
                    <div className="w-3 h-16 bg-red-400 hover:border hover:border-white cursor-pointer"></div>
                }>
                    <div className="">
                        <img src="/books/aftg.jpg" alt=""  width={80}/>
                    </div>

                    <div className="flex flex-col gap-1 max-w-60">
                        <p className="text-red-400">um milhão de finais felizes</p>
                        <p>livro incrível. com um momento incrivelmente triste. gostei muito!</p>
                    </div>
                </Window>
          
            </div>

            <div className="">

            </div>           
        </div>
    )
}