import axios from "redaxios"
import { createServerFn } from "@tanstack/start"
import { notFound } from "@tanstack/react-router"
import { z } from "zod"

export interface Product {
    id: string
    title: string
    price: number
}

const mock: Product[] = [
    { id: "1", title: "Product 1", price: 100 },
    { id: "2", title: "Product 2", price: 200 },
    { id: "3", title: "Product 3", price: 300 },
    { id: "4", title: "Product 4", price: 400 },
    { id: "5", title: "Product 5", price: 500 },
    { id: "6", title: "Product 6", price: 600 },
    { id: "7", title: "Product 7", price: 700 },
    { id: "8", title: "Product 8", price: 800 },
    { id: "9", title: "Product 9", price: 900 },
    { id: "10", title: "Product 10", price: 1000 },
]

const GetProductSchema = z.string()
type GetProductParams = z.infer<typeof GetProductSchema>

export const getProduct = createServerFn({ method: "GET" })
    .validator((params: GetProductParams) => GetProductSchema.parse(params))
    .handler(async ({ data }) => {
        console.info(`Fetching product with id ${data}...`)
        await new Promise((r) => setTimeout(r, 1000))
        const product = mock.find((p) => p.id === data)
        if (!product) throw notFound()
        return product
    })

export const getProducts = createServerFn({ method: "GET" }).handler(
    async () => {
        console.info("Fetching products...")
        await new Promise((r) => setTimeout(r, 1000))
        return mock
    },
)
