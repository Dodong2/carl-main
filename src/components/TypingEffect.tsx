import { TypingText } from "../hooks/useTypingText"

interface TypingEffectProps {
    texts: string[]
}

const TypingEffect = ({ texts }: TypingEffectProps) => {
    const { typing, displayedText } = TypingText(texts)

    return (
        <p className="text-justify">
            {displayedText}
            {typing && <span className="animate-pulse">▌</span>}
        </p>
    )
}

export default TypingEffect