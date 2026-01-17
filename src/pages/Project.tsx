/* components */
import PageTitle from "../components/PageTitle"
import RetroCircleContainer from "../components/RetroPixelUI/RetroCircleContainer"
import { PixelImage } from "../components/PixelImage"
/* images */
import PotionSlot from '../assets/rpgui/img/icons/potion-slot.png'
import Potion from '../assets/rpgui/img/icons/potion-red.png'
import Sword from '../assets/rpgui/img/icons/sword.png'

const Project = () => {
  return (
    <section id="projects" className="min-h-screen border-2 border-orange-600">
      <div className="p-3">
        <PageTitle image1={PotionSlot} image2={Potion} title="Projects" />
        <div className="min-h-screen p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <h1 className="text-white">Circle Retro</h1>
            {/* Circle Container with Buttons - Default */}
            <RetroCircleContainer size="lg" variant="default">
              <h3 className="text-white font-['Press_Start_2P'] text-xs mb-3">
                PLAYER 1
              </h3>
              <button className="bg-red-500 text-white px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-red-600 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
                START
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-blue-600 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mt-2">
                OPTIONS
              </button>
            </RetroCircleContainer>

            {/* Circle Container - NES Style */}
            <RetroCircleContainer size="lg"
              variant="nes"
              badgeIcon={
                <PixelImage src={Sword} />
              }
              badgeColor="bg-amber-600">
              <div className="text-white font-['Press_Start_2P'] text-xs mb-2">
                SCORE
              </div>
              <div className="text-yellow-300 font-['Press_Start_2P'] text-2xl">
                9999
              </div>
              <div className="text-gray-300 font-['Press_Start_2P'] text-[8px] mt-2">
                HIGH SCORE
              </div>
            </RetroCircleContainer>

            {/* Circle Container - Game Boy Style */}
            <RetroCircleContainer size="lg" variant="gameboy">
              <div className="text-green-900 font-['Press_Start_2P'] text-xs mb-3">
                LEVEL UP!
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 text-xs text-green-100 transition-colors bg-green-700 rounded-full hover:bg-green-600">
                  A
                </button>
                <button className="w-8 h-8 text-xs text-green-100 transition-colors bg-green-700 rounded-full hover:bg-green-600">
                  B
                </button>
              </div>
            </RetroCircleContainer>

            {/* Circle Container - Neon Style */}
            <RetroCircleContainer size="lg" variant="neon">
              <div className="text-cyan-400 font-['Press_Start_2P'] text-xs mb-3 animate-pulse">
                ARCADE
              </div>
              <button className="bg-cyan-400 text-black px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-cyan-300 transition-colors">
                INSERT COIN
              </button>
            </RetroCircleContainer>

            <h1 className="text-white">Image Circle Retro</h1>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Project