import Quiz from "@/src/app/[lang]/quiz/page";
import {getLangs} from "@/src/app/[lang]/langs";

export async function generateStaticParams() {
    const langs = ['en-us', 'fa', 'en', 'fa-ir']

    console.log(langs)

    return langs.map((lang) => (lang))
}

export default async function Layout({params}) {
    const dict = await getLangs(params.lang)
    return (
        <div className="container mx-auto">
            <Quiz dict={dict} lang={params.lang} />
        </div>
    )
}
