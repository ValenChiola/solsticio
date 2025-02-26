import { Moon, Sun } from "./Icons"

import { useTheme } from "~/hooks/useTheme"

export function ThemeSwitcher() {
    const { isDarkMode, toggleTheme } = useTheme()

    return (
        <div className="flex items-center justify-center">
            <label
                htmlFor="theme-switcher"
                className="flex items-center cursor-pointer m-0"
            >
                <div className="relative w-[70px] h-8">
                    <div
                        className="w-full h-full  rounded-full shadow-inner"
                        style={{
                            background: isDarkMode
                                ? "var(--color-info)"
                                : "var(--color-gradient)",
                        }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-between px-2">
                        <Sun />
                        <Moon />
                    </div>
                    <div
                        className={`absolute top-1 left-1 w-[28px] h-[24px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                            isDarkMode ? "translate-x-0" : "translate-x-[34px]"
                        }`}
                    ></div>
                </div>
            </label>
            <input
                type="checkbox"
                id="theme-switcher"
                className="hidden"
                checked={isDarkMode}
                onChange={toggleTheme}
            />
        </div>
    )
}
