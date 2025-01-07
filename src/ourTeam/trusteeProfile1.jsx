import trustee4 from '../../public/trustee4.jpeg'

function TrusteeProfile1() {
    const pStyle = {
        background: `url(${trustee4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    return (
        <section className="trustee-profiles">
            <div className="p-content">
                <div className="p-pic" style={pStyle}>

                </div>
                <div className="p-name">
                    <h1>Odunola Abayomi</h1>
                </div>
            </div>
            <div className="p-write-up">
                <p>Amb. Odunola Abayomi is a seasoned business coach, mentor, brand & media consultant with over a decade experience in the tech and photography industry. Her extensive background includes helping businesses, projects, and events achieve their cardinal goals through strategic branding, digital media marketing, advertising, and public relations. As a trained media and tech specialist, she has had the privilege of working with national and multinational brands both within and outside Nigeria and has made significant contributions to the public relations space. <br /><br /> She has empowered countless SMEs across Africa to become self sustainable and has spearheaded successful social media campaigns for major brands. Her expertise in managing and branding SMEs has led to the successful completion of numerous online projects. Her passion for imparting knowledge is evident in her role as a mentor, guest speaker, and moderator at various events. She is the host of 'The TOD Show,' a television program that highlights successful businesses and outstanding personalities contributing to the Nigerian economy and inspiring humanity across Africa and she also runs a non-governmental initiative called 'Give Back with T'Odunola,' aimed at supporting less privileged and rural communities through donations of books and other materials sourced from urban areas. This initiative aligns with SDGs 1, 4, 7, and 11, demonstrating her commitment to transforming the world through collective and individual efforts. She has received several awards and is an active member of communities and associations, including Toastmasters International, Junior Chamber International JCI, Rotary Club, and Techmentors. Her dedication to supporting and empowering African teenagers is reflected in her involvement with Techmentor Skills Empowerment Foundation. <br /> <br /> She is passionate about providing young Africans with the necessary technological skills and opportunities to thrive in today's digital world. As the Executive Director of Programs at Techmentors Skills Empowerment Foundation, she oversees the development, coordination, and implementation of educational and empowerment initiatives. This includes designing programs, strategic planning, ensuring program effectiveness, and building stakeholder relationships.</p>
            </div>
            <div className="team-socials">
                <div className="social-1">
                    <i className="bi-twitter"></i>
                </div>
                <div className="social-2">
                    <i className="bi-instagram"></i>
                </div>
                <div className="social-3">
                    <i className="bi-envelope"></i>
                </div>
            </div>

        </section>
    )
}

export default TrusteeProfile1;