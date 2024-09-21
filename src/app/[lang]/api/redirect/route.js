import {redirect} from "next/navigation";

export async function generateStaticParams() {
    redirect('http://localhost:3000')
}