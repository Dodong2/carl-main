/* react-router-dom */
import { lazy, Suspense } from 'react'
/* react-router-dom */
import { createHashRouter, RouterProvider } from 'react-router-dom'
/* css */
import './App.css'
/* components */
import PageLoader from './components/PageLoader'
import { AnimatedGridBackground } from './components/AnimatedGridBackground'
/* pages */
const Home = lazy(() => import('./pages/Home'))
const Skills = lazy(() => import('./pages/Skills'))
const Project = lazy(() => import('./pages/Project'))
const Contact = lazy(() => import('./pages/Contact'))

// router for page calling
const router = createHashRouter([
  { path: "/", element: <Home/> },
  { path: "/skills", element: <Skills/> },
  { path: "/projects", element: <Project/> },
  { path: "/contact", element: <Contact/> },
])

function App() {
  return (<>
    <AnimatedGridBackground/>
    <Suspense fallback={<PageLoader/>}>
      <RouterProvider router={router}/>
    </Suspense>
  </>)
}

export default App
