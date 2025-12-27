import { NavbarHooks } from "../hooks/NavbarHooks"

const Navbar = () => {
    const { showController, showNav, toggleController, scrollTo } = NavbarHooks()

    return (
        <>
            <div className={`fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="p-2 bg-[rgba(85,85,85,0.9)]">
                    <div className="flex items-center justify-between">
                        <div className="text-white">Carl Arocha</div>
                        <i className="snes-jp-logo active:scale-75 transition-transform duration-75" onClick={toggleController}></i>
                    </div>
                </div>
            </div>

            {/* controller */}
            {/* -bottom-10/1 */}
            {showController && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="nes-container with-title is-centered bg-white is-rounded ">
                        <p className="title">controller</p>
                        <div className="flex flex-col lg:flex-row gap-2">
                            <div className="flex gap-2">
                                <button className="nes-btn is-primary w-20" onClick={() => scrollTo("home")}>Home</button>
                                <button className="nes-btn is-success w-20" onClick={() => scrollTo("skills")}>Skills</button>
                            </div>
                            <div className="flex gap-2">
                                <button className="nes-btn is-warning w-20" onClick={() => scrollTo("projects")}>Project</button>
                                <button className="nes-btn is-error w-20" onClick={() => scrollTo("contacts")}>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar