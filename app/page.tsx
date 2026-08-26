"use client";

import "@/lib/icons";
import { Icon } from "@iconify/react";
import SimpleCard from "@/components/simple-card"
import Card from "@/components/card";
import Checkbox from "@/components/checkbox-input";

export default function Home(){
  return(
    <main className="w-full h-screen py-3 overflow-y-auto">
      <article className="w-5xl min-h-full flex flex-col my-5 mx-auto p-2 border border-white">
        <div className="w-full flex gap-2">
          <div className={`w-2/3 h-40 overflow-hidden text-white border border-white`} >
            <img src="https://i.pinimg.com/originals/a7/f2/97/a7f2970ebe98fcbfbe94bbf780233681.gif" width={700} alt="" />
          </div>

          <SimpleCard details="w-1/3 h-40">
            music
          </SimpleCard>
        </div>

        <SimpleCard details="w-full h-16 my-2">
          a
        </SimpleCard>

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
              <Card title="chacacter customization" className="w-2/3" details="grid grid-cols-5 py-4">
                <div className="col-span-2 flex flex-wrap justify-end gap-3">
                  <button className="w-18 h-18 flex justify-center items-center bg-blue-700/10 border border-blue-800
                  hover:bg-blue-500/20 hover:border-blue-500 cursor-pointer transition-colors">
                    <img src="headset.png" alt="" width={50} />
                  </button>
                  <button className="w-18 h-18 flex justify-center items-center bg-blue-700/10 border border-blue-800
                  hover:bg-blue-500/20 hover:border-blue-500 cursor-pointer transition-colors">
                    <img src="hair.png" alt="" width={50} />
                  </button>
                  <button className="w-18 h-18 flex justify-center items-center bg-blue-700/10 border border-blue-800
                  hover:bg-blue-500/20 hover:border-blue-500 cursor-pointer transition-colors">
                    <img src="ring.png" alt="" width={50} />
                  </button>
                  <button className="w-18 h-18 flex justify-center items-center bg-blue-700/10 border border-blue-800
                  hover:bg-blue-500/20 hover:border-blue-500 cursor-pointer transition-colors">
                    <img src="glasses.png" alt="" width={50} />
                  </button>
                </div>

                <div className="col-span-2 flex justify-center items-center">
                  <img src="gael.png" alt="" width={150} />
                </div>

                <div className="flex flex-col items-start gap-3">
                  <div className="w-18 h-18 bg-blue-700/10 border border-blue-800">

                  </div>
                  <div className="w-18 h-18 bg-blue-700/10 border border-blue-800">

                  </div>
                </div>
              </Card>

              <SimpleCard details="w-1/3 flex grid grid-rows-4 grid-cols-2">
                <div className="flex flex-col items-center text-sm hover:cursor-pointer">
                  <Icon icon="pixelarticons:folder" className="hover:bg-zinc-200/10" width={32} color="#FCC201" />
                  <p className="hover:bg-zinc-200/10">analog horror</p>
                </div>

                <div className="flex flex-col items-center text-sm hover:cursor-pointer">
                  <Icon icon="pixelarticons:folder" width={32} color="#FCC201" />
                  <p>geral</p>
                </div>

                <div className="flex flex-col items-center text-sm hover:cursor-pointer">
                  <Icon icon="pixelarticons:folder" width={32} color="#FCC201" />
                  <p>gameplay</p>
                </div>
              </SimpleCard>
            </section>

            <section>
              <Card title="midia" className="w-full h-96">
                a
              </Card>
            </section>

            <section className="flex gap-2 h-88">
              <SimpleCard details="w-md">
                games
              </SimpleCard>

              <Card title="my hobbies" className="w-full">
                hobbies
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

            <SimpleCard details="h-24">
              estante
            </SimpleCard>

            <Card title="my tags" details="flex flex-wrap gap-2 text-white">
              <span className="py-2 px-3 flex items-center border border-white">romance</span>
              <span className="py-2 px-3 flex items-center border border-white">comédia</span>
              <span className="py-2 px-3 flex items-center border border-white">terror</span>
              <span className="py-2 px-3 flex items-center border border-white">suspense</span>
              <span className="py-2 px-3 flex items-center border border-white">ficçãi científica</span>
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

            <SimpleCard details="h-52">
              photos
            </SimpleCard>
          </section>
        </section>
      </article>
    </main>
  );
}
