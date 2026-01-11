import { useState, useEffect, useRef } from "react"

export const NavbarHooks = () => {
    const [showController, setShowController] = useState(false)
    const [showNav, setShowNav] = useState(true)

    // show controller
    const toggleController = () => {
        setShowController(prev => !prev)
    }

    // helper for scroll router for smooth navigation
    const scrollTo = (id: string) => {
        const element = document.getElementById(id)

        if (element) {
            const elementTop = element.offsetTop
            window.scrollTo({
                top: elementTop,
                behavior: "smooth"
            })
        }
        setShowController(false)
    }

    // pang navbar logic: scroll up show & scroll down hide
    const lastScrollY = useRef(0)
    const idleTimer = useRef<number | null>(null)

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // always show navbar kapag nasa pinaka-taas
            if (currentScrollY === 0) {
                if (idleTimer.current) {
                    clearTimeout(idleTimer.current)
                    idleTimer.current = null
                }
                setShowNav(true)
                lastScrollY.current = currentScrollY
                return
            }

            // clear idle timer
            if (idleTimer.current) {
                clearTimeout(idleTimer.current)
            }

            // scroll up → show
            if (currentScrollY < lastScrollY.current) {
                setShowNav(true)
                setShowController(false)
            }

            // scroll down → hide
            if (currentScrollY > lastScrollY.current) {
                setShowNav(false)
                setShowController(false)
            }

            // idle hide after 5s
            idleTimer.current = window.setTimeout(() => {
                setShowNav(false)
            }, 5000)

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (idleTimer.current) clearTimeout(idleTimer.current)
        }
    }, [])

    return { showController, showNav, toggleController, scrollTo }
}