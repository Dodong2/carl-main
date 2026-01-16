
const RetroGameCards = () => {
    const games = [
        {
            title: "Programming Languages",
            description: "Shoot aliens before they reach Earth!"
        },
        {
            title: "Frontend Frameworks",
            description: "Navigate the maze and eat all dots!"
        },
        {
            title: "Backend Frameworks",
            description: "Stack blocks to clear lines and score!"
        }
    ];

    return (
        <div className="flex items-center justify-center mt-2">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-1xl">
                {games.map((game, index) => (
                    <div key={index} className="p-6 transition-colors duration-300 bg-[#4a5754] border-4 border-white rounded-lg hover:border-blue-400">
                        <h2 className="mb-3 font-bold tracking-wider text-center text-yellow-400 text-1xl">
                            {game.title}
                        </h2>
                        <div className="p-2 mb-6 bg-[#fcfff7] border-4 border-blue-500 rounded-md " style={{
                            backgroundImage: `
                                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px),
                                repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)
                            `
                        }}><i className="nes-mario"></i>
                            <ul className="ml-5 nes-list is-disc">
                                <li>Python.</li>
                                <li>Javascript.</li>
                                <li>Typescript.</li>
                            </ul></div>

                        <p className="text-sm leading-relaxed text-center text-white">
                            {game.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RetroGameCards