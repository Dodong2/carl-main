import RetroCircleContainer from "../components/RetroCircleContainer"
import RetroCircleImage from "../components/RetroCircleImage"

const Project = () => {
  return (
    <section id="projects" className="min-h-screen p-10 border-2 border-orange-600">
        <div className="p-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        <RetroCircleContainer size="lg" variant="nes">
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
            <button className="w-8 h-8 bg-green-700 text-green-100 rounded-full hover:bg-green-600 transition-colors text-xs">
              A
            </button>
            <button className="w-8 h-8 bg-green-700 text-green-100 rounded-full hover:bg-green-600 transition-colors text-xs">
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
        {/* Circle Image - Default */}
        <RetroCircleImage
          size="lg"
          variant="default"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR42mNgGAU4gCbQAWJOIs3QBOJnQPwciPOJMUATiJ8C8X8o/YxYA56CNAD5z4g1QBeqGYaBeriaYYCmQPwBiwnvgTgPXQzZdkwvwGsAulegyTpf0NVhugtZM8w7cO/AXDNqAD4AAMz/HK7/r8LnAAAAAElFTkSuQmCC"
          alt="Mario"
          badge="HERO"
        />

        {/* Circle Image - NES Style */}
        <RetroCircleImage
          size="lg"
          variant="nes"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR42mNgGAWDCmgC8TMgfo7GfwbEuiSaAVL7H4p/ArEuMQZoAvFPqKJnUPo5MQY8BeLnaPxnxBqgC8TPoPgZVA03YADVDNOMKeCFaobxcQE8GkG2Y3oBvwHoXhkFVAIAFw8crsW7hn4AAAAASUVORK5CYII="
          alt="Pac-Man"
        />

        {/* Circle Image - Arcade Style */}
        <RetroCircleImage
          size="lg"
          variant="arcade"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR42mNgGAWDEmgC8XMgfg7Ez6D0cyDWJcYATSB+CsT/ofQzIA4kxoD/UPoZED8l1gBdIH4GxT+JNUATiD9ADfkAxHnEGqAJNQSGdYk1QBNqCIzWJdYAmFeew7xCrAF6QGwAxfoD75VRAAAjyx2u6hRrQAAAAABJRU5ErkJggg=="
          alt="Sonic"
          badge="FAST"
        />

        {/* Circle Image - Neon Style */}
        <RetroCircleImage
          size="lg"
          variant="neon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR42mNgGAU4gCYQPwPi52j0MyDWJdIcTSB+CsT/gfgnEOcTYwC6QaS4QBdqyDMofk6sAZpA/AGIPwBxHrEGaALxczQXEm2AJhA/g2LiDYBphroKeAPQDXqGphmuGWYIcYaNAqoBABCfHK78kSlpAAAAAElFTkSuQmCC"
          alt="Link"
        />

        {/* Circle Image - Glitch Style */}
        <RetroCircleImage
          size="lg"
          variant="glitch"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR42mNgGAU4gCYQPwPi50CcR6Q5mkD8FIj/Q/EzINYlxgBNIH4KM4RYAzSB+AMQPwfiPGINgLkC5h1dYg2AeeMZEOcRa4AeVPMzYg3QhGp+RqwBmlDNz9BsJ84FWDS/GDUAFQAA5uEcrsUoZuIAAAAASUVORK5CYII="
          alt="Ryu"
          badge="FIGHTER"
        />

        {/* Mixed Example */}
        <RetroCircleContainer size="xl" variant="nes">
          <RetroCircleImage
            size="sm"
            variant="neon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR42mNgGAU4gCYQPwPi51A6j0hz9IH4JxD/h+JnQKxLjAEw8AmIdYkxQBOIn8IMAeJ8Yg3QBOIPUEc8J9YAXah3YIboEmsAzPZnQJxHrAF6UO88I9YATajtz9BsJ84FWDS/GDUAFQAANV8cruoUa0AAAAAASUVORK5CYII="
            alt="Samus"
          />
          <h3 className="text-white font-['Press_Start_2P'] text-xs mt-4 mb-2">
            SAMUS
          </h3>
          <button className="bg-yellow-400 text-gray-900 px-3 py-1 text-[8px] font-['Press_Start_2P'] hover:bg-yellow-300 transition-colors">
            SELECT
          </button>
        </RetroCircleContainer>

      </div>
    </div>
      </section>
  )
}

export default Project