
const Navbar = () => {
    return (
        <div className="max-w-120 mx-auto p-1 border border-red-500">
            <div className="nes-container with-title is-centered is-rounded bg-[rgba(248,248,255,0.9)]">
                <p className="">controller</p>
                <div className="flex justify-between">
                <button type="button" className="nes-btn is-primary">Home</button>
                <button type="button" className="nes-btn is-success">Skills</button>
                <button type="button" className="nes-btn is-warning">Projects</button>
                <button type="button" className="nes-btn is-error">Contacts</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar