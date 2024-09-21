'use client'

import {usePathname, useRouter} from "next/navigation";
import {useCookies} from 'next-client-cookies';

import Link from "next/link";
import usFlag from '@/src/assets/flags/us.svg'
import irFlag from '@/src/assets/flags/ir.svg'
import Image from "next/image";

// const locales = ['en-us', 'en', 'fa', 'fa-ir']
export default function LocaleSwitcher() {
    const pathName = usePathname()
    const cookies = useCookies()
    const router = useRouter()
    let cookieStore = null
    const redirectedPathName = (locale) => {
        // if (!cookieStore == null)
        cookies.set('language', locale)
        router.push(`/${locale}`)

        // if (!pathName)
        //     return '/'

        // const segments = pathName.split('/')
        // segments[1] = locale
        // return segments.join('/')
    }

    return (
        <div>
            {/* <p>انتخاب زبان :</p> */}
            <ul className="mx-auto inline-block">
                <li className="flex flex-row">
                    <button onClick={() => redirectedPathName("en-us")}>
                        {/*<Link href={redirectedPathName("en-us")}>*/}
                        <Image
                            src={usFlag}
                            className="m-2"
                            width={30}
                            height={30}
                            alt="US Flag"
                        />
                    </button>

                    {/*<Link href={redirectedPathName("fa-ir")}>*/}
                    <button onClick={() => redirectedPathName("fa-ir")}>
                        <Image
                            src={irFlag}
                            className="m-2"
                            width={30}
                            height={30}
                            alt="IR Flag"
                        />
                    </button>
                </li>
            </ul>
        </div>
    )
}
