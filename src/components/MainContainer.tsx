import { type ReactNode } from 'react'

interface MainContainerProps {
  children: ReactNode
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div  className="fixed inset-0 overflow-y-auto overflow-x-hidden z-10">
      {children}
    </div>
  )
}

export default MainContainer