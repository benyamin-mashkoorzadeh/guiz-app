'use client'

import Modal from "@/src/components/modal/Modal";
import Frame from "@/src/components/modal/Frame";

export default function PhotoModal() {
    const photo = "https://picsum.photos/id/237/200/300"

    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    )
}
