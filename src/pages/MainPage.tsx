import { Suspense, lazy } from "react"
/* components */
import Navbar from "../components/Navbar"
import PageLoader from "../components/PageLoader"

/* pages */
const Home = lazy(() => import('./Home'))
const Skills = lazy(() => import('./Skills'))
const Project = lazy(() => import('./Project'))
const Contact = lazy(() => import('./Contact'))

/* pages games */
const Game1 = lazy(() => import('./Games/Game1'))
const Game2 = lazy(() => import('./Games/Game2'))
const Game3 = lazy(() => import('./Games/Game3'))

const MainPage = () => {
  return (
    <>
        <Navbar />
        <Suspense fallback={<PageLoader/>}>
            <Home/>
            <Game1/>
            <Skills/>
            <Game2/>
            <Project/>
            <Game3/>
            <Contact/>
        </Suspense>
    </>
  )
}

export default MainPage