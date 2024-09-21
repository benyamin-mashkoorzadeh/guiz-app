import {Negotiator} from "negotiator";
import {match} from "@formatjs/intl-localematcher";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";

const locales = ['en-us', 'en', 'fa-ir', 'fa']

function getLocale(request) {
    const negotiatorHeader = {}
    request.headers.forEach((value, key) => (negotiatorHeader[key] = value))

    const languages = new Negotiator({headers: negotiatorHeader}).languages()

    const defaultLocale = 'fa-ir'
    const locale = match(languages, locales, defaultLocale)
    console.log(`Languages: ${languages}`)
    console.log(`Locals: ${locales}`)
    console.log(`DefaultLocale: ${defaultLocale}`)
    console.log(`Locale: ${locale}`)
    return locale
}

export function middleware(request) {

    let locale

    const cookieStore = cookies().get('language')
    // console.log(cookieStore.value)

    const {pathname} = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) {
        return
    }

    if (cookieStore)
        locale = cookieStore.value
    else
        locale = getLocale(request)

    return NextResponse.redirect(new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url))
}

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)"
}