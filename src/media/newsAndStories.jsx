import { NewsData } from "../newsData/newsData"


function NewsAndStories() {

    const showNews = NewsData.map((each) => {
        const newsStyle = {
            background: `linear-gradient(transparent, rgba(0,0,0,0.6)), url(${each.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }

        return <div className="news-box">
            <div className="news-image" style={newsStyle}></div>
            <div className="write-up">
                <h1>{each.heading}</h1>
                <p>{each.writeUp}</p>
                <span>Read More {">>"}</span>
            </div>
            <div className="news-date">
              <p>{each.date}</p>
            </div>

        </div>
    })

    return (
        <div className="news">
            <div className="news-head">
                <h1>Latest News</h1>
            </div>
            <div className="news-wrapper">
                {showNews}

            </div>
        </div>
    )
}

export default NewsAndStories