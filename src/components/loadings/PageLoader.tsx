import PageLoaderHooks from "../../hooks/PageLoaderHooks";
import type { PageLoaderProps } from '../../types/shared-types'


const PageLoader = ({minLoadTime = 2000, onComplete}: PageLoaderProps) => {
  const { progress } = PageLoaderHooks({ minLoadTime, onComplete })

  return (
    <div className="bg-[#303030] h-screen z-50 m-0 p-10 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 nes-container is-dark is-centered w-70">
        <p className="nes-text">LOADING QUEST...</p>
        <progress className="nes-progress is-pattern" value={progress} max="300"></progress>
      </div>
    </div>
  )
};

export default PageLoader