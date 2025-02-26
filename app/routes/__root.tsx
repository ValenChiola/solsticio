import * as React from "react"

import {
    HeadContent,
    Outlet,
    Scripts,
    createRootRoute,
} from "@tanstack/react-router"

import { ClerkProvider } from "@clerk/tanstack-start"
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary.js"
import { NavBar } from "~/components/NavBar"
import { NotFound } from "~/components/NotFound.js"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import appCss from "~/styles/app.css?url"
import { createServerFn } from "@tanstack/start"
import { esES } from "@clerk/localizations"
/// <reference types="vite/client" />
import { getAuth } from "@clerk/tanstack-start/server"
import { getWebRequest } from "@tanstack/start/server"

const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env

if (!VITE_CLERK_PUBLISHABLE_KEY)
    throw new Error("No VITE_CLERK_PUBLISHABLE_KEY found!")

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
    const { userId } = await getAuth(getWebRequest()!)

    return {
        userId,
    }
})

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png",
            },
            { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
            { rel: "icon", href: "/favicon.ico" },
        ],
    }),
    beforeLoad: async () => {
        const { userId } = await fetchClerkAuth()

        return {
            userId,
        }
    },
    errorComponent: (props) => (
        <RootDocument>
            <DefaultCatchBoundary {...props} />
        </RootDocument>
    ),
    notFoundComponent: () => <NotFound />,
    component: RootComponent,
})

function RootComponent() {
    return (
        <ClerkProvider
            publishableKey={VITE_CLERK_PUBLISHABLE_KEY}
            signInFallbackRedirectUrl="/"
            signUpFallbackRedirectUrl="/"
            localization={esES}
        >
            <RootDocument>
                <Outlet />
            </RootDocument>
        </ClerkProvider>
    )
}

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <HeadContent />
            </head>
            <body>
                <NavBar />
                <hr />
                <main className="h-screen">{children}</main>
                <TanStackRouterDevtools position="bottom-right" />
                <Scripts />
            </body>
        </html>
    )
}
