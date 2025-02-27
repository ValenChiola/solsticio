import { ErrorComponent, createFileRoute } from "@tanstack/react-router"

import { Card } from "~/components/Card"
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
    const { title, price } = Route.useLoaderData()

    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                padding: "2rem",
                margin: "2rem",
                background: "rgb(241 241 241)",
                borderRadius: "0.7rem",
            }}
        >
            <img
                style={{ width: "100%", borderRadius: "0.7rem" }}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXFxIQEA8SERAQFRIWFRIXFxUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMuNygtLisBCgoKDg0OGhAQGjEfIB0vNS0tKystLS83LTAtLSstLS0rLTctNy0rKy0tLS0rLS0tLy0vLS0tLS0tLS8tLS0tNf/AABEIARoAswMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECBAUHAwj/xABKEAACAQIEAQoCBgQIDwAAAAAAAQIDEQQFEiExBgcTIkFRYXGBkTLBFCNSYqGxcoKy0SQzU2OSotLwFSU0RVRVc4OEk5TCw+Hx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAIhEBAQACAgICAwEBAAAAAAAAAAECEQMhMUES8BNR0TIi/9oADAMBAAIRAxEAPwDuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGLj8wpUUukmouWrRG/Wm4xcpKK7bRi36AZQOCcoec7Hzry6Cr0FLZwpxp0pyS+9KUXd+R5ZbzmZlCpHXXVWN1qhOlSWpd2qMU15mv4cmf5I+gAYOS5rTxNGFam9pRjJxdtULr4ZLv4+xnGTQAAAAAAAAAAAAAAAAAAAAAC2c1FNyaSW7baSS72yD8tOcajhG6NBKtWW0t/q6T7pNfE/ur1aORZ9ylxWLlevWlJXuqSemnHygtvV3fibYcOWXd6ZZcsnjt2fOucjAULxjN158NNG0o+tR9X2bIZVzeeLxNGvO2qWCx0oRXCL6SpFRXlFW8bHM5zJVkeNUKeGxD+HD16mHrr+ZxUXab8E3U9bGt48cfDP53Lyh+Jl9Y/JfkVpS6y9/Yzc6yarSxM6EY6nFtR3S1Q4wnd7fCxgcqrOtChKKjKo4xjaUZfE95bO1kk2/Avzm11dJ1yZzGeFq06sXvHLJ15QbajO1eU6akvKXpcnWSc5mAr2jOboT22rWUbtb2qLq2vtvY5hnGOThisRF9So6eXYTxpUbOpJfdeiO/wB4hurcnwmXlJncfD6yp1FJKUWmnupJpprvTXEuPmHIuUeKwjvh604K93Tvqpy77031X52v4nV+SHOlSrNUsYo0ajslWV+hk/G+9P1uvFGWXDZ47aY8svnp0cBMGLUAAAAAAAAAAAAACI85eZYmjhJfRVu0+lqRb106dt5QXz4pb+Klrdt35kdx1fVql38PySLjdXaWbmnzipXa8kJS38jJzS30mvpSSVWqoxWySVR2SXYjBkz6G3j0OW3qbXk9joU5yp1f4mtF0a/hFtONRfehK0l5PvNS+CKSOb2s6TLO8A62GlCpb6TgrUar/lsO39VVT7bXT8n4oweT+ClCCjT2rYhSp0m9uhob9NiZd2q0kn3JtcUabCSq16kKXSbz0YdSqTelRc1aMnx0p229jJzariKNetSlVTltSqSpbRnBRVoJJK0bWTj4WM9du99L+UWYQqThSo/xFGPRUfvb3nVfjKW/sah8SgR3Jpze3pBlzla/kyyJk4KKdWmpK8XOmpR74uaUl6q51ty7RzOYjFfRrV5Xou30RTu5pdtn2U3tpT8bbWOikao7W07JJOKWyVuFvQkVGpqin3ngyy+V29mM1NLwARQAAAAAAAAAAYWa1rR09r/JcSP4qe3mzOzCtqm32cF5I1uNfw+YHBMbK9Wq++pUfvNsw5s9XO9337+54n0Hii59hWRRlyIrxiuP9+8vRalu/T5lyAysvy+pWlpppPeKlJuyjqvZv0Untd2jJ9hs1yXq9GqilF3VdqNql26M9OhLTfVJXcbpXsWZVj6rj0NN04SUZRhWlJwag5apQWzjqc2nqtfqrfaNtzXh8SpWhWtTqPEPGzabc7r4m9W9OXfxj3nFt26kRHG4eVObhNJSVm0pRmrSipRalFtNNNPZ9oo1tLjL7LjL2aZsM+x1WbVKo4fV3v0b1RlNtudW/wBqV97WWy22NRU+F+T/ACO45fSOCl1bd23objKa3GD/AEl8yPZdUuo+MYv8DZ4eppkn7+XaeB7G/ATAAAAAAAAAAx8dV0wfe9l6mQanN6t5KPcvxf8A6A1zMPGS68F4mYjBzGSjKMnwSbb7klv+AHAY/CeSPaTVttl2LwPBH0K8UVZfEtZWJB7YFUulh02rotUel0bS033sXZiqXSz6DV0V/qtfxafH1vx3ta+5ixXWfp8y7tGlUDEgwhqDVwkJBXduT2I1UMPP7VKi/V01f8TfNHPebXMdeHVNvelJwX6LeqP5yX6p0JLtPFlNWx68buNzl1W8Eu1bfuMo1GWVbTt9pW9Vuvmbc5UAAAAAAAAI5iKl25d7bN3mFTTTb79l6kfYFURnnDxXR4SbXGS6JfrvS/wb9iTo5/ztYvqUKXfKVV+UI6V+M37HfHN5SOc7rGuZVDxSPSoy1HtryRRl8Sxs9EBanZt+X5MrEyMrxfQ1oVdEZ6GpdHPeMtmt9vG68Ui3G4npKk6ijGGqUpaIq0Y3fBIntWNIXEigFwbLZMASPkBmPRYpRb2qLS/0o3lH8NS/WO34ed0fN1OrKDU4/FFqcP0otNfij6DyPFqrRp1IO8ZxjOPlJJo83NO9t+K9abLVZprindehIYTuk12pMjkmbfKK14W7Yv8AB7r5mLVnAAAAAAAA1mc1OEf1n+S+ZqUzKzCrecvO3tsY0UBVrY4/zmYzXjHG+1OnThbucrzf4Tj7HXsRwOCcpsTrxeIl/O1I+kZaF+EUbcE/62y5b1pq5FUWlInpYKnomeZekCrb7/38SikXUaM5zUKcZTlJqMYQTlKT7kkUnSlGTjKLjJNxlGScXFrimnwZNijZVMpYFFJFEykgTalzsfNVjdeCUG7ulOdF+W04e0Zpehxu50jmdxO+Jp/7GovXXF/sxMuXvFpx3t1FbmVldTTO3ft+4xZFtOdmn3NM8zdJgUTvuVAAAAWVp6Yt9ybLzDzWdqdu9pfP5AaRlIsNhoCzEPb2PnfHVNVSpL7U5y95Nn0DmE7JvuTf4HztF7LyRvwe2PL6JFShU3ZDPRMsZVFR6YLFTp1FUpy0zi7xkrO21uD2eza9SuLxEpylObcpSblKT4tvizwg92VkyA2UbKoskWqomBEM5FCb80Ve2MqQ+1Rb/o1If2mQglnNVL/GK8aNZf1qb+Rnn/mu8P8ATtiKNCBWZ5nob3L6l6cfDq+2xkmtyWe0o9zT9/8A4bIAAABouUmZ0qbhCc9LkpTV1K1k0rtpWXHtN6RblRk1KvVUpualGCpqUKko7XcraXeL49qA88PiadRaqc4zje2qEozV12XXaeyZrOT+SU8HSdGk5OLnOq5T0uTc3d/Cku5cOw2aQGDnO1Ko+6E37RZ88R4L0PorNIXpzj3wmveLR86R4LyRvw+2PL6XIRKNiLN2S9ouseesKRdoyMswM69aNGnp1zemOp6Yrqttt2fYmUxuEnSqTpTtqhKUJaXqV07bPtRjwe/qmvS256yZItWFjLmy0lBFt9ypRkFSWc1Ub5ivChWf9emvmSvkbyOwNfA4etUoKdSSqOpJ18RG7VacUmoTSj1Ut7HjyMyynSzfHxoxtSpKNKmtTnZTknbU22/gfaY5cky3j+m2OFlldFgikpbl90eaW7MWrPymdqlu9NfP5G7I9hp2nF+K/MkIAAACD8seVWHwmJjSr9JHXCNWNWMFKCV3Fp2eq609ifFE4OZc5WYv6TGlDFYenppRc8PiqGunNylJpupplp2ttsdYTdc5XUbDLOUWExE9FGvCcuEYXcZStHU9MZJNq3b4PuNwzkWLwsbdJXwCUVusdldVaYv7WiLcV5uxk4LOMW5Q+h5lHE2so4TFxjTqTvsoNtXqPfip3O7x/pzOT9utYPC9JJX4Ld/uOO8tuQOIp4yqsNRlKjJqrTacHZTV5Q3d9paktuFjvOBw+iCTtqsnNrhe29vA59zsZepVMPV6DFT6tSEquEk1KFpRcVJaJJ31Ste3Bk47qrnOnIq3JrFx44et6UakvyRiyyeuuNKqvOjUXyJZrpw41c4p+LasvxRd/hqiv8742PhODbXn1zdih6yqr/J1P+VP9x5YjCVKdtcJRvw1QlC/lfiTZ8oI9mcYn/pr/wDkNHynzFVFD+G1cTZy2q03TUNlvHrO9/kWb+7StZkuV1cTV6KioubUp9aSgkopXbb9PcxakZJuLVnFuLWz3Ts1sbHk5lzr1tEa8aDUZzVWUnHgl1U007u/sma+crO11ttdO6fin3FnnSL1hJtXs7Pe+iVvcfQ59z/oSJdlmdyjSpxjmzppQilReElNU7L4FKzvbhcyHyil2537YOV/2UTv7v8Ai9fdf1DY5VWfCnUflSm/kXLJsR2Uaz/3FR/IldTP1/rqvLvUcNNe16iPKeYxe/8AhDMZfowmk/L64n32v30i08krpf5NWf8Aw9W/7J3vkhyJhgcJFLetK1XEy724rqR+7He3q+055yWwscVi6NNVMfUWuM6jqySpqMOvLX1pbNK3qd7MuW+mnHPaLvbf1uR/NuV+Cw8lqrKb3ThS+tcfF6dl6mh51KFaFdwrY108LUSlRw8KcnKSSSnCSikpq/2pdq2747l2Sq2qjl9Sov8ASMdU6GmvHo4uKa9WTHj63VvJ3pL8v5wqNfEUsPQoVZSqVIU1Oo6dOMVKSUp7OTdld2sr27DrJwrLMW6VajKpjcNTUatJ/RcBSUlO1RNwlOKVk+Du2d1Oc8ZPC4ZbAAcOw0ue8lMHi969CMpWS6VXp1LLgtcbNpdzN0Cy2eCzbmOO5ptEnUwOMqUpdiqX9ukp2aXmmXckeSONjjFUx9KhONJdJTxUVB1JVL2itUdMmldvrR42OmA6/JdOfhAAHDoKNJ8V7lQB4VMHSl8VOD84RfyMWpkOEl8WFoPzoUn+aNiANPPkpl744HCvzwtD+yekOTeCXDB4ZeWHor/tNoC7qajBhk2GXDD0V5Uaa+R7wwdNcKcF5Qivke4IqkYJcEl5JIqAAAAEe5b5ZiK2H/gmhYiMounOahdRbtNKUk9O1n+qiFYfmrxNd6sfjpS7dFPVVa8p1Nl6QOrA6mdk6c3GVFcn5vcuw7Uo0FUmmmqldus01wai+qn5JEqAJbb5WTQACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
                alt={title}
            />
            <Card>
                <h1>{title}</h1>
                <p>{price}</p>
            </Card>
        </section>
    )
}
