
/* components */
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Navbar />

      {/* home - sections */}
      <section id="home" className="min-h-screen p-10">
        <div className="nes-container is-dark with-title">
          <p className="title">Container.is-dark</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
      </section>

      {/* skills - sections */}
      <section id="skills" className="min-h-screen p-10 border-2 border-amber-400">
        <div className="nes-container is-rounded bg-[rgba(225,225,225,0.9)]">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
      </section>
      {/* projects - sections */}
      <section id="projects" className="min-h-screen p-10 border-2 border-orange-600">
        <h1 className="text-white">Projects</h1>
      </section>
      {/* contacts - sections */}
      <section id="contacts" className="min-h-screen p-10 border-2 border-blue-700">
        <h1 className="text-white">Contacts</h1>
      </section>
    </>
  )
}

export default Home