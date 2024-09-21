'use client'

import {useEffect} from "react";

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="container">
            <div>
                <h2>مشکلی پیش آمده است 🧐</h2>
                <button onClick={() => reset()}>دوباره تلاش کن 🤗</button>
            </div>
        </div>
    )
}