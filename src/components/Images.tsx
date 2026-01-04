type ImagesProps = {
    src: string
    alt?: string
    className?: string
}

const Images = ({ src, alt = "", className }: ImagesProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <img 
                    src={src} 
                    alt={alt} 
                    loading="lazy"
                    decoding="async" 
                    className={`w-full h-96 object-contain select-none drop-shadow-xl transition-transform duration-300 hover:scale-105 ${className ?? ""}`} />
            </div>
        </div>
    )
}

export default Images