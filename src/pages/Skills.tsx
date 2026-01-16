/* data */
import { SkillsData } from '../data/SkillsData'
/* components */
import PageTitle from '../components/PageTitle'

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen border-2 border-amber-400">
      {SkillsData.map((skill) => (
        <div className="p-3" key={skill.id}>
          <PageTitle image={skill.image} title={skill.title} />
        </div>
      ))}


    </section>
  )
}

export default Skills