export function generateStaticParams(request) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("name")


    return new Response(`Query is: ${query}`, {status: 200})
}