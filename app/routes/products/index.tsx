import { Link, Outlet, createFileRoute } from "@tanstack/react-router"

import { getProducts } from "~/api/products.js"

export const Route = createFileRoute("/products/")({
    loader: () => getProducts(),
    component: PostsComponent,
})

function PostsComponent() {
    const posts = Route.useLoaderData()

    return (
        <section className="p-2 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] mx-[20%] gap-2">
            {posts.map((post) => (
                <article key={post.id} className="p-2 border rounded h-[200px]">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p className="text-lg">{post.price}</p>
                    <Link
                        to="/products/$id"
                        params={post}
                        className="text-blue-500"
                    >
                        View
                    </Link>
                </article>
            ))}
        </section>
    )
}
