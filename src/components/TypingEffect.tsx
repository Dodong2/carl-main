import { TypingText } from "../hooks/useTypingText"

interface TypingEffectProps {
    texts: string[]
}

const TypingEffect = ({ texts }: TypingEffectProps) => {
    const { typing, displayedText } = TypingText(texts)

    return (
        <p>
            {displayedText}
            {typing && <span>|</span>}
        </p>
    )
}

export default TypingEffect