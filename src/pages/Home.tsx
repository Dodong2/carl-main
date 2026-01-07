/* components */
import Images from "../components/Images"
/* images */
import Sword from "../assets/images/sword-chatgpt-removeBG.png"

const Home = () => {
  return (
    <>
      {/* home - sections */}
      <section id="home" className="min-h-screen p-10">
        <div className="flex justify-around items-center">
          <div>
            <div className="nes-container is-rounded with-title is-centered bg-[rgba(225,225,225,0.9)]">
              <p className="title">Container.is-centered</p>
            <h1>Hi, I am Carl Arocha I am a Frontend Developer</h1>
            </div>
            </div>

          <Images src={Sword} alt="sword" className="image-rendering-pixelated" />
        </div>
      </section>
    </>
  )
}

export default Home