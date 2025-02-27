import { Link } from "@tanstack/react-router"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { UserAccount } from "./UserAccount"

export const NavBar = () => (
    <nav className="p-2 flex items-center justify-between container-solsticio">
        <div className="flex gap-2 items-center">
            <ThemeSwitcher />
            <Link to="/">Solsticio</Link>
        </div>
        <div className="flex gap-2 items-center">
            <Link to="/" activeProps={{ className: "font-bold" }}>
                Inicio
            </Link>
            <Link
                to="/products"
                activeOptions={{ exact: false }}
                activeProps={{ className: "font-bold" }}
            >
                Productos
            </Link>
        </div>
        <UserAccount />
    </nav>
)
