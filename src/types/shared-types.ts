/* Loading */
export interface PageLoaderProps {
    minLoadTime: number
    onComplete?: () => void
}

// types/retro-card-types.ts
export interface CardStat {
    label: string;
    value: number;
}

export interface RetroCardData {
    id: string;
    name: string;
    game: string;
    badge: string;
    image: string;
    stats: CardStat[];
    specialMove: string;
}

export type ViewMode = 'grid' | 'list';

interface buttonLabel {
    label: string
}
export interface HomeTypes {
    id: string
    image: string
    dialogue: string[]
    buttonLabels: buttonLabel[]
}