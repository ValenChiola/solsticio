import { ErrorComponent, createFileRoute } from "@tanstack/react-router"

import type { ErrorComponentProps } from "@tanstack/react-router"
import { NotFound } from "~/components/NotFound.js"
import { getProduct } from "~/api/products.js"

export const Route = createFileRoute("/products/$id")({
    loader: ({ params: { id } }) => getProduct({ data: id }),
    errorComponent: ProductErrorComponent,
    component: ProductComponent,
    notFoundComponent: () => <NotFound>Product not found</NotFound>,
})

export function ProductErrorComponent({ error }: ErrorComponentProps) {
    return <ErrorComponent error={error} />
}

function ProductComponent() {
    const product = Route.useLoaderData()

    return (
        <div className="space-y-2">
            <h4 className="text-xl font-bold underline">{product.title}</h4>
        </div>
    )
}
