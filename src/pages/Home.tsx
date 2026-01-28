/* Data */
import { HomeData } from "../data/HomeData"
/* components */
import RetroContainer from "../components/RetroPixelUI/RetroContainer"
import RetroCircleImage from "../components/RetroPixelUI/RetroCircleImage"
import RetroButton from "../components/RetroPixelUI/RetroButton"
/* hooks */
import { useHome } from "../hooks/useHome"
import { useRetroModal } from "../hooks/useRetroModal"
import RetroModal from "../components/RetroPixelUI/RetroModal"

const Home = () => {
  const { showResume, displayedText, showContinue, handleContinue } = useHome()
  const { read, openModal, closeModal, animate } = useRetroModal()

  return (
    <section id="home" className="min-h-screen">
      {HomeData.map((home) => (
        <div className="flex flex-col items-center justify-center p-5 mt-40 lg:gap-4 lg:flex-row" key={home.id}>
          <div className="grid md:gap-0 sm:gap-0 lg:gap-1">
            <RetroCircleImage
              size="lg"
              variant="glitch"
              src={home.image}
              alt="Ryu"
              badge="WARRIOR"
            />
            {showResume && (
              <RetroButton color="red" onClick={() => {
                if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
                  window.open(home.resume, "_blank")
                } else {
                  openModal()
                }
              }}>{home.buttonLabels[0].label}</RetroButton>
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
                    <span className="absolute -top-1/14 -left-5">▶</span><span className="text-center">{home.buttonLabels[1].label}</span>
                  </button>
                )}
              </div>
            </RetroContainer>
          </div>

          {read && (
            <RetroModal onClose={closeModal} animate={animate}>
              <div className="w-full h-[80vh] overflow-auto">
                <iframe
                  src={home.resume}
                  title="Resume"
                  className="w-full h-full min-h-[600px]"
                />
              </div>
            </RetroModal>
          )}
        </div>
      ))}


    </section>
  )
}

export default Home