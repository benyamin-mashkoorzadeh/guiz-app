import Quiz from "@/src/app/[lang]/quiz/page";
import {getLangs} from "@/src/app/[lang]/langs";

export default async function Layout({params}) {
    const dict = await getLangs(params.lang)
    return (
        <div className="container mx-auto">
            <Quiz dict={dict} lang={params.lang} />
        </div>
    )
}
