import Link from "next/link";
import Image from "next/image";
import {getLangs} from "@/src/app/[lang]/langs";

export default async function About({params}) {
    const dict = await getLangs(params.lang)

    const photo = "https://picsum.photos/id/237/200/300"

    return (
        <main className="p-5 mt-2 bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded mx-auto w-7/12 ">
            <div>
                <div className="text-gray-300 text-center mb-5">
                    <h1 className="text-lg">{dict['about'].fullname}</h1>
                    <h2>{dict['about'].info}</h2>
                </div>
                <Link href={`/about/photo`}>
                    <Image
                        alt=""
                        src={photo}
                        height={400}
                        width={400}
                        className="mx-auto rounded object-cover aspect-square"
                    />
                </Link>
            </div>
        </main>
    )
}
