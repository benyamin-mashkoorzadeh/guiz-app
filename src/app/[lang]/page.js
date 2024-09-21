import Link from "next/link";
import {getLangs} from "@/src/app/[lang]/langs";
import LocaleSwitcher from "@/src/components/localeSwitcher";

export async function generateStaticParams() {
    const langs = ['en-us', 'fa', 'en', 'fa-ir']

    console.log(langs)

    return langs.map((lang) => (lang))
}
export default async function Home({params}) {
    const dict = getLangs(params.lang)
    return (
        <main className="container mx-auto">
            <div className="text-center">
                <LocaleSwitcher />
            </div>
            <div className="text-center flex flex-col">
                <h1 className="text-3xl mt-10 mb-10 text-center">
                    {dict['main'].appName}
                </h1>
                <Link href='/quiz'>
                    <button
                        type="button"
                        className="px-6 py-2 text-sm rounded shadow bg-rose-100 hover:bg-rose-200 text-rose-500 w-72">
                        {dict['main'].appStartBtn}
                    </button>
                </Link>
                <Link href='/about'>
                    <button
                        type="button"
                        className="px-6 py-2 text-sm rounded shadow bg-green-400 hover:bg-green-600 text-white w-72">
                        {dict['main'].aboutStartBtn}
                    </button>
                </Link>
            </div>
        </main>
    )
}