'use client'

import {useEffect} from "react";

export default function Error({error, reset}) {
    console.log(`The Error : ${error}`)

    return (
        <html>
            <body>
            <div className="container">
                <h2>مشکلی پیش آمده است 🧐</h2>
                <h3>در لایه ی اصلی</h3>
                <button onClick={() => reset()}>دوباره تلاش کن 🤗</button>
            </div>

            </body>
        </html>
    )
}