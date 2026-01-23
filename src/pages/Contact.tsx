/* Data */
import { ContactData } from "../data/ContactData"
/* components */
import PageTitle from "../components/PageTitle"
import RetroButton from "../components/RetroPixelUI/RetroButton"
/* images */
import ShieldSlot from '../assets/rpgui/img/icons/shield-slot.png'
import Shield from '../assets/rpgui/img/icons/shield.png'


const Contact = () => {
  return (
    <section id="contacts" className="">
      <div className="p-3">
        <PageTitle image1={ShieldSlot} image2={Shield} title="Contacts" />

        <div className="min-h-30 bg-[#1a1a2e] text-white p-5 relative mt-2"
          style={{
            backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px),
            repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)
          `
          }}>

          {ContactData.map((contact) => (
            < div key={contact.id}>
              <div className='flex items-center justify-center text-center' >
                <div className="flex flex-col items-center gap-4">
                  <h1 className="lg:text-2xl sm:text-[15px] tracking-wider text-white mb-2.5" style={{ textShadow: '4px 4px 0 rgba(0,0,0,1)' }}>
                    {contact.message}
                  </h1>
                </div>
              </div>

              <div className={`grid gap-6 mb-8 grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3`}>

                <div className=" bg-[#1a1a2e] text-white p-5 relative font-['Press_Start_2P']"
                  style={{
                    clipPath: `polygon(
          0% 15%, 5% 15%, 5% 10%, 10% 10%, 10% 5%, 15% 5%, 15% 0%,
          85% 0%, 85% 5%, 90% 5%, 90% 10%, 95% 10%, 95% 15%, 100% 15%,
          100% 85%, 95% 85%, 95% 90%, 90% 90%, 90% 95%, 85% 95%, 85% 100%,
          15% 100%, 15% 95%, 10% 95%, 10% 90%, 5% 90%, 5% 85%, 0% 85%
        )`
                  }}>
                  {/* hover */}
                  <div className="relative flex items-center justify-center gap-2 text-2xl italic font-bold text-center text-white group">
                    <div className="p-0.5 w-full bg-white" />
                    <span className="text-center text-md whitespace-nowrap">Quest Board</span>
                    <div className="p-0.5 w-full bg-white" />
                    {/* Simple tooltip shown only on hover */}
                    <div className="absolute hidden px-3 py-1 text-xs text-white -translate-x-1/2 bg-black -bottom-6 left-1/2 group-hover:block whitespace-nowrap">
                      My service now.
                    </div>
                  </div>

                  <div className="">
                    <p>{contact.services[0]}</p>
                    <p>{contact.services[1]}</p>
                  </div>

                </div>

                <div className="bg-[#1a1a2e] text-white p-5 relative font-['Press_Start_2P']"
                  style={{
                    clipPath: `polygon(
          0% 15%, 5% 15%, 5% 10%, 10% 10%, 10% 5%, 15% 5%, 15% 0%,
          85% 0%, 85% 5%, 90% 5%, 90% 10%, 95% 10%, 95% 15%, 100% 15%,
          100% 85%, 95% 85%, 95% 90%, 90% 90%, 90% 95%, 85% 95%, 85% 100%,
          15% 100%, 15% 95%, 10% 95%, 10% 90%, 5% 90%, 5% 85%, 0% 85%
        )`
                  }}>
                  <div className="relative flex items-center justify-center gap-2 text-2xl italic font-bold text-center text-white group">
                    <div className="p-0.5 w-full bg-white" />
                    <span className="text-center text-md whitespace-nowrap">Direct</span>
                    <div className="p-0.5 w-full bg-white" />
                  </div>

                  <div className="flex items-center justify-center mt-4">
                    <RetroButton color="yellow">
                      Send Quest
                    </RetroButton>
                  </div>

                </div>

                <div className=" bg-[#1a1a2e] text-white p-5 relative font-['Press_Start_2P']"
                  style={{
                    clipPath: `polygon(
          0% 15%, 5% 15%, 5% 10%, 10% 10%, 10% 5%, 15% 5%, 15% 0%,
          85% 0%, 85% 5%, 90% 5%, 90% 10%, 95% 10%, 95% 15%, 100% 15%,
          100% 85%, 95% 85%, 95% 90%, 90% 90%, 90% 95%, 85% 95%, 85% 100%,
          15% 100%, 15% 95%, 10% 95%, 10% 90%, 5% 90%, 5% 85%, 0% 85%
        )`
                  }}>
                  <div className="relative flex items-center justify-center gap-2 text-2xl italic font-bold text-center text-white group">
                    <div className="p-0.5 w-full bg-white" />
                    <span className="text-center text-md whitespace-nowrap">Social</span>
                    <div className="p-0.5 w-full bg-white" />
                  </div>

                  <div className="flex items-center mt-2 justify-evenly">
                    <a href={contact.links[0]}>
                      <i className="nes-icon facebook is-large"></i>
                    </a>
                    <a href={contact.links[1]}>
                      <i className="nes-icon linkedin is-large"></i>
                    </a>
                    <a href={contact.links[2]}>
                      <i className="nes-icon github is-large"></i>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Contact