/* components */
import RetroContainer from "../components/RetroPixelUI/RetroContainer"
import RetroCircleImage from "../components/RetroPixelUI/RetroCircleImage"
// import Images from "../components/Images"
/* images */
import Me from '../assets/images/Me.png'
// import Sword from '../assets/images/sword-chatgpt-removeBG.png'
/* hooks */
import { HomeHooks } from "../hooks/HomeHooks"
/* icons */

const Home = () => {
  const { showResume, displayedText, showContinue, handleContinue } = HomeHooks()

  return (
    <>
      {/* home - sections */}
      <section id="home" className="min-h-screen">
        <div className="flex flex-col items-center justify-center p-5 mt-40 lg:gap-4 lg:flex-row">
          {/* <Images src={Sword} alt="sword" className="image-rendering-pixelated" /> */}
          <div className="grid md:gap-0 sm:gap-0 lg:gap-2">
            <RetroCircleImage
              size="lg"
              variant="glitch"
              src={Me}
              alt="Ryu"
              badge="WARRIOR"
            />
            {showResume && (
              <button className="nes-btn is-success">Resume/Stats</button>
            )}
          </div>
          <div>
            <RetroContainer size="lg" title="Carl">
              <div className="text-xs leading-relaxed sm:text-sm md:text-base">
                {displayedText}
                {!showContinue && <span className="animate-pulse">▌</span>}
              </div>
              <div className="flex justify-end mt-1">
                {showContinue && !showResume && (
                <button className="relative animate-pulse" onClick={handleContinue}>
                  <span className="absolute -top-1/14 -left-5">▶</span><span className="text-center">continue</span>
                </button>
                )}
              </div>
            </RetroContainer>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home