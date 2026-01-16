import { PixelImage } from "../components/PixelImage"
import TestImage from '../assets/rpgui/img/icons/helmet-slot.png'

const Contact = () => {
  return (
    <section id="contacts" className="min-h-screen p-10 border-2 border-blue-700">
      <h1 className="text-white">Contacts</h1>
      <PixelImage
        src={TestImage}
        width={64}
        height={64}
      />
    </section>
  )
}

export default Contact