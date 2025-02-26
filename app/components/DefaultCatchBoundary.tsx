import type { ErrorComponentProps } from "@tanstack/react-router"
import { NotFound } from "./NotFound"

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
    console.log({ error })

    return <NotFound>Ups! Hubo un error inesperado: {error.message}</NotFound>
}
