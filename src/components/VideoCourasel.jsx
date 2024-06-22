import { hightlightsSlides } from "../constants";

function VideoCourasel() {
    return <div className="flex items-center">
        {hightlightsSlides.map((lists, i) => (
            <div key={lists.id} id="slider" className="sm:pr-20 pr-10">
                <div className="video_courasel_container">
                    <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                        <video
                            id="video"
                            playsInline={true}
                            preload="auto"
                            muted
                        >
                            <source src={lists.video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="absolute top-12 left-[5%] z-10">
                        {lists.textLists.map((text) => (
                            <p key={text} className="md:text-2xl text-xl font-medium">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        ))}
    </div>;
}

export default VideoCourasel