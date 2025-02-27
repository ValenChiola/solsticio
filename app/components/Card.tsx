import { ComponentProps, PropsWithChildren } from "react"

import Styles from "./Card.module.css"

export const Card = ({
    children,
    className,
    ...rest
}: PropsWithChildren<ComponentProps<"article">>) => {
    return (
        <article {...rest} className={`${Styles.card} ${className ?? ""}`}>
            {children}
        </article>
    )
}
