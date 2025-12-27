import { Suspense, lazy } from "react"
/* components */
import Navbar from "../components/Navbar"
import PageLoader from "../components/PageLoader"

/* pages */
const Home = lazy(() => import('./Home'))
const Skills = lazy(() => import('./Skills'))
const Project = lazy(() => import('./Project'))
const Contact = lazy(() => import('./Contact'))

const MainPage = () => {
  return (
    <>
        <Navbar />
        <Suspense fallback={<PageLoader/>}>
            <Home/>
            <Skills/>
            <Project/>
            <Contact/>
        </Suspense>
    </>
  )
}

export default MainPage