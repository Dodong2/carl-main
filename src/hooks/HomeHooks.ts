import { useState } from "react"

export const HomeHooks = () => {
    const [showResume, setShowResume] = useState(false)
    const [count, setCount] = useState(0)

    const reachCount = () => {
        setCount(prevCount => prevCount + 1)
        if (count == 2) {
            setShowResume(true)
        }
    }

    return { showResume, reachCount }
}
