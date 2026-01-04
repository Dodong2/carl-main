/* components */
import Images from "../components/Images"
/* images */
import Sword from "../../public/sword1.png"

const Home = () => {
  return (
    <>
      {/* home - sections */}
      <section id="home" className="min-h-screen p-10">
      <Images src={Sword} alt="sword" className="image-rendering-pixelated"/>
      </section>  
    </>
  )
}

export default Home