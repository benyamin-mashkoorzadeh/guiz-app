import Image from "next/image";

export default function Frame({photo}) {
    return (
        <>
            <Image src={photo} alt="" height={600} width={600}
                   className="w-full object-cover aspect-square col-span-2"/>
        </>
    )
}
