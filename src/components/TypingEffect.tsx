import { useAutoTypingText } from "../hooks/useAutoTypingText"

interface TypingEffectProps {
    texts: string[]
}

const TypingEffect = ({ texts }: TypingEffectProps) => {
    const { typing, displayedText } = useAutoTypingText(texts)

    return (
        <p className="text-justify" style={{ textShadow: '4px 4px 0 rgba(0,0,0,1)' }}>
            {displayedText}
            {typing && <span className="animate-pulse">▌</span>}
        </p>
    )
}

export default TypingEffect