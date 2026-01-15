import { useState, useEffect } from "react"
import { HomeData } from "../data/HomeData"

export const HomeHooks = () => {
    const [showResume, setShowResume] = useState(false)
    const [textIndex, setTextIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [showContinue, setShowContinue] = useState(false)

    const home = HomeData[0]
    const dialogues = home.dialogue

    useEffect(() => {
        if (textIndex >= dialogues.length) return

        const currentDialogue = dialogues[textIndex]

        if (displayedText.length < currentDialogue.length) {
            setIsTyping(true)
            setShowContinue(false)

            const timeout = setTimeout(() => {
                setDisplayedText(currentDialogue.slice(0, displayedText.length + 1))
            }, 30)

            return () => clearTimeout(timeout)
        } else {
            setIsTyping(false)
            setShowContinue(true)
        }
    }, [displayedText, textIndex, dialogues])

    const handleContinue = () => {
        if (textIndex < dialogues.length - 1) {
            setTextIndex(textIndex + 1)
            setDisplayedText("")
            setShowContinue(false)
        } else {
            setShowResume(true)
        }
    }

    return {
        showResume,
        displayedText,
        isTyping,
        showContinue,
        handleContinue,
        isLastDialogue: textIndex === dialogues.length - 1
    }
}
