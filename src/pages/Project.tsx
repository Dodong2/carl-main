/* data */
import { ProjectData } from "../data/ProjectData"
/* components */
import PageTitle from "../components/PageTitle"
import RetroCardImage from "../components/RetroPixelUI/RetroCardImage"
/* images */
import PotionSlot from '../assets/rpgui/img/icons/potion-slot.png'
import Potion from '../assets/rpgui/img/icons/potion-red.png'

const Project = () => {
  return (
    <section id="projects" className="min-h-screen border-2 border-orange-600">
      <div className="p-3">
        <PageTitle image1={PotionSlot} image2={Potion} title="Projects" />
        <div className="mt-3">
          <div className={`grid gap-6 mb-8 grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3`}>
            {ProjectData.map((project) => (
              <RetroCardImage key={project.id} data={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project