import { useState, useEffect } from "react"

export const TypingText = (texts: string[]) => {
  const [typing, setTyping] = useState(true)
  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')

  const currentText = texts[textIndex] ?? ""

  useEffect(() => {
    if (!currentText) return

    if (displayedText.length < currentText.length) {
      setTyping(true)

      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1))
      }, 30)

      return () => clearTimeout(timeout)
    } else {
      setTyping(false)
    }
  }, [displayedText, currentText])


  return {
    typing,
    displayedText,
    setTextIndex
  }
}

