'use client'

import Modal from "../ui/Modal";

const VideoTestimonial = ({ open, setOpen }) => {

    return (<>
        <Modal isOpen={open} onClose={() => { setOpen(false) }}>
            <video
                src="/assets/video-testimonial.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
        </Modal>
    </>)
}

export default VideoTestimonial;
