import { SignIn } from "@clerk/tanstack-start"
import { createFileRoute } from "@tanstack/react-router"

const NotAuthenticatedError = "Not authenticated"

export const Route = createFileRoute("/_authed")({
    beforeLoad: ({ context: { userId } }) => {
        if (!userId) throw new Error(NotAuthenticatedError)
    },
    errorComponent: ({ error }) => {
        if (error.message !== NotAuthenticatedError) throw error

        return (
            <div className="flex items-center justify-center p-12">
                <SignIn
                    routing="hash"
                    forceRedirectUrl={window.location.href}
                />
            </div>
        )
    },
})
