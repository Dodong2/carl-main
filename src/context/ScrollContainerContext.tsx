// every time na gagamit ng context dito ilalagay
import { createContext, type RefObject } from 'react'

export const ScrollContainerContext = createContext<RefObject<HTMLDivElement> | null>(null)