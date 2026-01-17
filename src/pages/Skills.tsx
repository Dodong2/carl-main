/* data */
import { SkillsData } from '../data/SkillsData'
/* components */
import PageTitle from '../components/PageTitle'
import RetroCardText from '../components/RetroPixelUI/RetroCardText'
/* images */
import WeaponSlot from '../assets/rpgui/img/icons/weapon-slot.png'
import { useState } from 'react'
import type { ViewMode } from '../types/shared-types'

const Skills = () => {
  const [viewMode] = useState<ViewMode>('grid');
  return (
    <section id="skills" className="min-h-screen border-2 border-amber-400">
      <div className="p-3">
        <PageTitle image={WeaponSlot} title={'Skills'} />
        <div className={`grid gap-6 mb-8 grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3`}>
          {SkillsData.map((skill) => (
            <RetroCardText key={skill.id} data={skill} Mode={viewMode} />
          ))}
        </div>
      </div>


    </section>
  )
}

export default Skills