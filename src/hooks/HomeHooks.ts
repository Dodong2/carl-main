import { useState, useEffect } from "react"

export const HomeHooks = () => {
    const [showResume, setShowResume] = useState(false)
    const [textIndex, setTextIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [showContinue, setShowContinue] = useState(false)

    const dialogues = [
        "Greetings! My name is Carl Stephen Arocha. I'm currently a fourth-year BSIT student and a vibe coder full stack developer.",
        "As a web developer, I'm still at the beginner level, but I'm constantly learning and building projects to level up my skills.",
        "I'm eager to expand my portfolio and open to collaborating on projects that match my skill set. Check out my skills and experience below!",
        "Please click continue to view my resume and see what this warrior can bring to the table!",
        "Thank you for taking the time to learn more about me. Let's build something awesome together!"
    ]

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
