import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/tanstack-start"

import { LogInIcon } from "./Icons"

export const UserAccount = () => (
    <div className="flex">
        <SignedIn>
            <UserButton showName />
        </SignedIn>
        <SignedOut>
            <SignInButton mode="modal">
                <button className="bg-transparent">
                    <LogInIcon />
                </button>
            </SignInButton>
        </SignedOut>
    </div>
)
