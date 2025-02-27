import { ProductItem } from "~/components/ProductItem"
import { createFileRoute } from "@tanstack/react-router"
import { getProducts } from "~/api/products.js"

export const Route = createFileRoute("/products/")({
    loader: () => getProducts(),
    component: ProductsComponent,
})

function ProductsComponent() {
    const products = Route.useLoaderData()

    return (
        <section className="p-2 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-2">
            {products.map((product) => (
                <ProductItem key={product.id} {...product} />
            ))}
        </section>
    )
}
