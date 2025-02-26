import { useEffect, useState } from "react"

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light")

    // 1. Cargar tema inicial considerando sistema y localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null
        const isSystemDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches

        setTheme(storedTheme ?? (isSystemDark ? "dark" : "light"))
    }, [])

    // 2. Sincronizar con cambios del sistema
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

        const handler = ({ matches }: MediaQueryListEvent) =>
            setTheme(matches ? "dark" : "light")

        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, [])

    // 3. Actualizar la clase y el localStorage
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"))

    const isDarkMode = theme === "dark"

    return {
        isDarkMode,
        toggleTheme,
    }
}

type Theme = "dark" | "light"
