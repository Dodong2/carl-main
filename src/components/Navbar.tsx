import { useState } from "react"

const Navbar = () => {
    const [show, setShow] = useState(false)

    const toggleController = () => {
        setShow(prev => !prev)
    }

    return (
        <div className="sticky top-0 p-2 z-10 bg-[rgba(85,85,85,0.9)]">
            <div className="flex items-center justify-between">
                <div className="text-white">Carl Arocha</div>
                <i className="snes-jp-logo active:scale-75 transition-transform duration-75" onClick={toggleController}></i>
            </div>

            {/* controller */}
            {show && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-120 max-w-120">
                <div className="nes-container with-title is-centered bg-white is-rounded ">
                    <p className="title">controller</p>
                    <div className="flex flex-wrap justify-center gap-2 sm:justify-between scale-90 sm:scale-100">
                        <button type="button" className="nes-btn is-primary">Home</button>
                        <button type="button" className="nes-btn is-success">Skills</button>
                        <button type="button" className="nes-btn is-warning">Projects</button>
                        <button type="button" className="nes-btn is-error">Contacts</button>
                    </div>
                </div>
            </div>
            )}
            
        </div>
    )
}

export default Navbar