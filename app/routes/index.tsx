import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: Home,
})

function Home() {
    return (
        <div className="p-2">
            <h1>Bienvenido a Solsticio ☀️!</h1>
            <div className="flex gap-2">
                <button>Default</button>
                <button className="gradient">Gradient</button>
                <button className="success">Success</button>
                <button className="warning">Warning</button>
            </div>
        </div>
    )
}
