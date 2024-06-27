import MediaBanner from "./mediaBanner";
import NewsAndStories from "./newsAndStories";
import RelatedLinks from "./relatedLinks";


function Media() {

    return (
        <div className="media">
              <MediaBanner /> 
              <NewsAndStories />
              <RelatedLinks />
             
        </div>
    )
}

export default Media;