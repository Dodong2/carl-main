import { useEffect, useState } from "react"
/* types */
import type { PageLoaderProps } from "../types/shared-types"

const PageLoaderHooks = ({ minLoadTime, onComplete }: PageLoaderProps) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 300) {
                    clearInterval(progressInterval)
                    setTimeout(() => {
                        onComplete?.()
                    }, 300) // 300ms delay para makita yung 100%
                    return 300
                }
                return prev + 6 // adjust speed ng progress bar
            })
        }, minLoadTime / 50) // divide para smooth yung animation

        return () => {
            clearInterval(progressInterval)
        }

    }, [minLoadTime, onComplete])


    return { progress }
}

export default PageLoaderHooks