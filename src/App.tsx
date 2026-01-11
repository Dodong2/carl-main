/* react-router-dom */
import { lazy, Suspense } from 'react'
/* react-router-dom */
/* css */
import './App.css'
/* components */
import FirstPageLoader from './components/loadings/FirstPageLoader'
import SampleLoader from './components/loadings/SampleLoading'
// import { AnimatedGridBackground } from './components/AnimatedGridBackground'
import MainBackground from './components/MainBackground'
import MainContainer from './components/MainContainer'
/* context */

/* pages */
const MainPage = lazy(() => import('./pages/MainPage'))

function App() {
  
  return (
    <>
      {/* <AnimatedGridBackground /> */}
      <MainBackground />
      <FirstPageLoader/>
        <MainContainer>
          <Suspense fallback={<SampleLoader />}>
            <MainPage />
          </Suspense>
        </MainContainer>
    </>
  )
}

export default App
