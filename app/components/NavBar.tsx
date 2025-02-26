import { ComponentProps } from "react"
import { Link as TanLink } from "@tanstack/react-router"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { UserAccount } from "./UserAccount"

export const NavBar = () => (
    <nav className="p-2 flex items-center justify-between">
        <div className="flex gap-2 items-center">
            <ThemeSwitcher />
            <Link to="/">Solsticio</Link>
        </div>
        <div className="flex gap-2 items-center">
            <Link to="/">Inicio</Link>
            <Link to="/posts">Productos</Link>
        </div>
        <UserAccount />
    </nav>
)

export const Link = ({
    activeOptions,
    activeProps,
    ...rest
}: ComponentProps<typeof TanLink>) => (
    <TanLink
        {...rest}
        activeOptions={{ exact: true, ...activeOptions }}
        activeProps={{ className: "font-bold", ...activeProps }}
    />
)
