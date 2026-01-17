/* components */
import PageTitle from "../components/PageTitle"
/* images */
import ShieldSlot from '../assets/rpgui/img/icons/shield-slot.png'
import Shield from '../assets/rpgui/img/icons/shield.png'

const Contact = () => {
  return (
    <section id="contacts" className="min-h-screen border-2 border-blue-700">
      <div className="p-3">
        <PageTitle image1={ShieldSlot} image2={Shield} title="Contacts" />
      </div>
    </section>
  )
}

export default Contact