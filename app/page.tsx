"use client";

import "@/lib/icons";
import { Icon } from "@iconify/react";
import SimpleCard from "@/components/simple-card"
import Card from "@/components/card";
import Checkbox from "@/components/checkbox-input";
import Window from "@/components/window";
import Chacacter from "@/components/chacacter";
import ChannelSection from "@/components/channel-section";
import MidiaSection from "@/components/midia-section";
import { useState } from "react";
import midiaData from '@/data/midias.json'
import GameSection from "@/components/game-section";
import IconCarousel from "@/components/icon-carousel";

type Categories = keyof typeof midiaData

export default function Home(){
  const [ category, setCategory ] = useState<Categories>('films')

  return(
    <main className="w-full h-screen py-3 overflow-y-auto">
      <article className="w-5xl min-h-full flex flex-col my-5 mx-auto p-2 border border-white">
        <div className="w-full flex gap-2">
          <div className={`w-2/3 h-40 overflow-hidden text-white border border-white`} >
            <img src="https://i.pinimg.com/originals/12/9c/06/129c062e7e3736fd357396a7f92658d0.gif" width={700} alt="" />
          </div>

          <SimpleCard details="w-1/3 h-40">
            music
          </SimpleCard>
        </div>

        <IconCarousel />

        <section className="w-full h-full flex gap-2">
          <section className="w-2/3 h-full flex flex-col gap-2">
            <section className="flex gap-2">
              <div className="w-1/3 h-52 flex flex-col gap-2">
                <SimpleCard details="h-2/3 flex gap-3 items-center">
                  <img className="w-24" src="snoopy.webp" alt="img snoopy" />
                  <div>
                    <p>name: gael</p>
                    <p>mbti: istp</p>
                    <p>color: blue</p>
                    <p>18y</p>
                  </div>
                </SimpleCard>

                <SimpleCard details="h-1/3 flex gap-5 justify-center items-center">
                  <Icon icon="dinkie-icons:cat-face-small" width={24} height={24} />
                  <p>mika is here !</p>
                </SimpleCard>
              </div>

              <SimpleCard details="w-2/3 h-52 flex flex-col justify-between">
                <p>olá, me chamo gael e fiz este site de pagina única para uma atividade escolar a fim de mostrar informações sobre mim, como meus gostos e curiosidades.
                  Este site foi desenvolvido usando Next Js por escolha pessoal para aprofundar meus conhecimentos no framework em questão. </p>
                <p>Fique a vontade para me conhecer!</p>
              </SimpleCard>
            </section>

            <section className="flex gap-2">
              <Card title="chacacter customization" className="w-2/3" details="grid grid-cols-5 place-items-center py-3">
                <div className="col-span-2 flex flex-wrap justify-end my-auto gap-5">
                  <Window title="HEADSET" trigger={
                    <button className="w-18 h-18 flex justify-center items-center bg-blue-700/10 border border-blue-800
                  hover:bg-blue-500/20 hover:border-blue-500 cursor-pointer transition-colors">
                      <img src="headset.png" alt="" width={50} />
                    </button>
                  }>
                    <p className="w-60">gosto muito de escutar musica! estou escutando sempre que posso.</p>
                  </Window>
                  <Window title="HAIR" align="start" trigger={
                    <button className="w-18 h-18 flex justify-center items-center bg-blue-700/10 border border-blue-800
                    hover:bg-blue-500/20 hover:border-blue-500 cursor-pointer transition-colors">
                      <img src="hair.png" alt="" width={50} />
                    </button>
                  }>
                    <p className="w-60">este é o meu corte de cabelo! ter cabelo grande me incomoda, entao sempre corto ele. eu mesmo sempre corto meu cabelo!</p>
                  </Window>
                  <Window title="RING" trigger={
                    <button className="w-18 h-18 flex justify-center items-center bg-blue-700/10 border border-blue-800
                    hover:bg-blue-500/20 hover:border-blue-500 cursor-pointer transition-colors">
                      <img src="ring.png" alt="" width={50} />
                    </button>
                  }>
                    <p className="w-60">gosto de usar acessorios e principalmente aneis!</p>
                  </Window>
                  <Window title="GLASSES" align="center" trigger={
                    <button className="w-18 h-18 flex justify-center items-center bg-blue-700/10 border border-blue-800
                    hover:bg-blue-500/20 hover:border-blue-500 cursor-pointer transition-colors">
                      <img src="glasses.png" alt="" width={50} />
                    </button>
                  }>
                    <p className="w-60">possuo miopia e astigmatismo, com 6 graus em cada olho! bastante, nao?</p>
                  </Window>
                </div>

                <div className="col-span-2 flex justify-center items-center">
                  <Window title='ME' align="start" trigger={
                    <button>
                      <Chacacter />
                    </button>
                  }>
                    <p className="w-60">este sou eu! fiz esta pixel art inspirada nos personagens do jogo omori!</p>
                  </Window>
                </div>
              </Card>

              <div className="w-1/3 text-white flex flex-col justify-between border border-white hover:border-blue-400 transition-colors">
                <ChannelSection />

                <div className="flex border-t">
                  <Icon className="m-1" icon={'pixelarticons:avatar-square-sharp'} width={20}/>
                  <span className="border-l"></span>
                </div>
              </div>
            </section>

            <section>
              <Card title="arquivos" className="w-full h-96" details="flex gap-2">
                <div className="h-82 border border-blue-700">
                  <div className="w-36 flex items-center py-0.5 pl-1 gap-1 bg-blue-700 text-white">
                    <Icon icon={'pixelarticons:chevron-down-2'} width={20} color="fff" />
                    <Icon icon={'pixelarticons:folder-sharp'} width={20} color="fff"/>
                    <span>my midia</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`flex items-center pl-7 py-1 gap-2 text-white hover:bg-blue-700/10 ${category=='films' && 'bg-blue-800/40'} cursor-pointer transition-colors`}
                      onClick={() => setCategory('films')}>
                      <Icon icon={'pixelarticons:folder-sharp'} width={20} color="fff"/>
                      filmes
                    </span>
                    <span className={`flex items-center pl-7 py-1 gap-2 text-white hover:bg-blue-700/10 ${category=='series' && 'bg-blue-800/40'} cursor-pointer transition-colors`}
                      onClick={() => setCategory('series')}>
                      <Icon icon={'pixelarticons:folder-sharp'} width={20} color="fff"/>
                      series
                    </span>
                    <span className={`flex items-center pl-7 py-1 gap-2 text-white hover:bg-blue-700/10 ${category=='animes' && 'bg-blue-800/40'} cursor-pointer transition-colors`}
                      onClick={() => setCategory('animes')}>
                      <Icon icon={'pixelarticons:folder-sharp'} width={20} color="fff"/>
                      animes
                    </span>
                    <span className={`flex items-center pl-7 py-1 gap-2 text-white hover:bg-blue-700/10 ${category=='cartoon' && 'bg-blue-800/40'} cursor-pointer transition-colors`}
                      onClick={() => setCategory('cartoon')}>
                      <Icon icon={'pixelarticons:folder-sharp'} width={20} color="fff"/>
                      desenhos
                    </span>
                  </div>
                </div>

                <MidiaSection category={category} />
              </Card>
            </section>

            <section className="flex gap-2">
              <GameSection />

              <Card title="my hobbies" className="w-full text-white">
                <ul className="flex flex-col gap-3 list-disc list-inside">
                  <li><strong>artesanato</strong> - gosto de fazer artesanatos com papel e papelão, principalmente de coisas para compor a decoração do meu quarto.</li>
                  <li><strong>edição</strong> - costumava editar nos de 2020 e 2021. atualmente faço isso por hobbie de tempos em tempos quando cai alguma inspiração!</li>
                  <li><strong>assistir</strong> - no tempo livre gosto principalmente de maratonar series, sequência de filmes e animes! mas assisto diversos tipos de média visual, de filmes a obras de analog horror e gamplays!</li>
                </ul>
              </Card>
            </section>
          </section>

          <section className="w-1/3 h-full flex flex-col gap-2">
            <div className={`h-64 overflow-hidden border border-blue-700`}>
              <div className="bg-blue-700 w-full py-1.5 px-3 flex items-center text-white ">
                  <h3>snoopy.gif</h3>
              </div>
              <div>
                  <img src="https://i.pinimg.com/originals/98/8b/1a/988b1a8c2669422e2a7fad943a953a60.gif"  width={350}/>
              </div>
            </div>

            <div className="w-full h-24 flex justify-center items-end border border-white hover:border-blue-400">
              <div className="flex w-2/3 items-baseline">
                <Window title="BOOK" details="flex max-w-80 items-center gap-3" button trigger={
                  <div className="w-5 h-16 bg-orange-600 hover:border hover:border-white cursor-pointer"></div>
                }>
                  <div className="">
                    <img className="w-54" src="/books/aftg.jpg" alt=""  width={80}/>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-orange-400">a toca das raposas</p>
                    <p>atualmente estou lendo esta sequencia de livros, parece muito interessante.</p>
                  </div>
                </Window>
          
              </div>

              <div className="">

              </div>
            </div>

            <Card title="my tags" details="flex flex-wrap gap-2 text-white">
              <span className="py-2 px-3 flex items-center border border-white hover:border-blue-400 transition-colors">romance</span>
              <span className="py-2 px-3 flex items-center border border-white hover:border-blue-400 transition-colors">comédia</span>
              <span className="py-2 px-3 flex items-center border border-white hover:border-blue-400 transition-colors">terror</span>
              <span className="py-2 px-3 flex items-center border border-white hover:border-blue-400 transition-colors">suspense</span>
              <span className="py-2 px-3 flex items-center border border-white hover:border-blue-400 transition-colors">ficçãi científica</span>
            </Card>

            <Card title="to-do" details="flex flex-col gap-2">
              <Checkbox text="nascer" />
              <Checkbox text="estudar" />
              <Checkbox text="terminar one piece" />
              <Checkbox text="platinar bloons td6" />
            </Card>

            <Card title="my playlist" className="h-96">
              playlist
            </Card>

            <SimpleCard details="grid grid-cols-3 grid-rows-2 place-items-center gap-5">
              <img className="border border-white hover:border-blue-500 transition-colors" src="https://i.pinimg.com/originals/f3/86/3c/f3863cb3303473f0214506e1891a2291.gif" alt="one-piece-gif" width={80}/>
              <img className="border border-white hover:border-blue-500 transition-colors" src="https://i.pinimg.com/736x/0b/97/5a/0b975acc1f0fe6df66fd77f546e35a80.jpg" alt="sally-face-jpg" width={80}/>
              <img className="border border-white hover:border-blue-500 transition-colors" src="https://i.pinimg.com/originals/b4/08/33/b408334cd4d0940c630c2dcfc8a6a5d4.gif" alt="steven-universo-gif" width={80}/>
              <img className="h-20 border border-white hover:border-blue-500 transition-colors" src="https://i.pinimg.com/originals/a3/7a/dd/a37add84f8d6a3f321c5656a8479f3c3.gif" alt="mob-gif" width={80}/>
              <img className="border border-white hover:border-blue-500 transition-colors" src="https://i.pinimg.com/originals/af/70/63/af7063a789c2e357e9c2b17ef8610221.gif" alt="hollander-gif" width={80}/>
              <img className="border border-white hover:border-blue-500 transition-colors" src="https://i.pinimg.com/1200x/b1/a4/a5/b1a4a5fc9f0c9469860427ae16ec1a91.jpg" alt="chester-jpg" width={80}/>
            </SimpleCard>
          </section>
        </section>
      </article>
    </main>
  );
}
