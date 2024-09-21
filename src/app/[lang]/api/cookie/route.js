import {cookies} from "next/headers";

export async function generateStaticParams() {
    const cookieStore = cookies()
    const token = cookieStore.get("token")

    return new Response(`Hello NexJS!: Token -> ${token && token.value}`, {
        status: 200,
        headers: {
            "Set-Cookie": `token=${token}`
        }
    })
}