import { Link, useNavigate } from "@tanstack/react-router"

import { PropsWithChildren } from "react"

export function NotFound({ children }: PropsWithChildren) {
    const navigate = useNavigate()

    return (
        <div
            style={{
                display: "grid",
                placeItems: "center",
                height: "100dvh",
                width: "100dvw",
            }}
        >
            <div className="space-y-2 p-2 text-center">
                <div className="text-gray-600 dark:text-gray-400">
                    {children || (
                        <h2>Ups! Parece que esta página no existe.</h2>
                    )}
                </div>
                <p className="flex items-center justify-center gap-2 flex-wrap">
                    <button
                        className="gradient uppercase"
                        onClick={() =>
                            navigate({
                                to: "/",
                            })
                        }
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="uppercase"
                    >
                        Ir atrás
                    </button>
                </p>
            </div>
        </div>
    )
}
