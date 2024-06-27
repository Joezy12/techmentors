import who2 from '../../public/who2.jpg'


function MediaBanner() {

    const mBanner = {
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://static.vecteezy.com/system/resources/thumbnails/036/908/490/original/african-american-man-watching-journalist-talking-about-various-stories-on-news-channel-person-relaxing-in-home-theatre-by-looking-at-ultrawide-modern-tv-set-in-living-room-close-up-shot-video.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "0px -60px",
    }

    return (
        <div className="media-banner" style={mBanner}>
            
            <p>New and stories</p>
        </div>
    )
}

export default MediaBanner;