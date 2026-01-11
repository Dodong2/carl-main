/* components */
import Images from "../components/Images"
import RetroContainer from "../components/RetroContainer"
/* images */
import Sword from "../assets/images/sword-chatgpt-removeBG.png"

const Home = () => {
  return (
    <>
      {/* home - sections */}
      <section id="home" className="min-h-screen p-10">
        <div className="flex flex-col items-center justify-around lg:flex-row">
          <Images src={Sword} alt="sword" className="image-rendering-pixelated" />
          <div>
            <RetroContainer size="lg" title="MISSION BRIEF">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                Quest: Save the Kingdom
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                The dark lord has stolen the sacred crystal.
                Journey through 8 dungeons to retrieve it and restore peace.
              </p>
            </RetroContainer>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home