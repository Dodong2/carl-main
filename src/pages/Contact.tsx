/* components */
import PageTitle from "../components/PageTitle"
/* images */
import RingSlot from '../assets/rpgui/img/icons/ring-slot.png'

const Contact = () => {
  return (
    <section id="contacts" className="min-h-screen border-2 border-blue-700">
      <div className="p-3">
        <PageTitle image={RingSlot} title="Contacts" />
      </div>
    </section>
  )
}

export default Contact