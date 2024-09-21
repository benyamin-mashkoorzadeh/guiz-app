import Frame from "@/src/components/modal/Frame";

export default function PhotoPage() {

    const photo = "https://picsum.photos/id/237/200/300"

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Frame photo={photo} />
            </div>
        </div>
    )
}
