import { useState } from 'react'
import trustee1 from '../../public/trustee1.jpeg'
import trustee2 from '../../public/trustee2.jpeg'
import trustee3 from '../../public/trustee3.jpeg'
import trustee4 from '../../public/trustee4.jpeg'
import trustee5 from '../../public/trustee5.jpeg'
import trustee7 from '../../public/trustee7.jpeg'
import trustee8 from '../../public/trustee8.jpeg'
import trustee9 from '../../public/trustee9.jpeg'
import { NavLink } from 'react-router-dom'
import who1 from '../../public/who2.jpg'



function Team() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const teamPic1 = {
        background: `url(${trustee1})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic2 = {
        background: `url(${trustee2})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic3 = {
        background: `url(${trustee3})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic4 = {
        background: `url(${trustee4})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic5 = {
        background: `url(${trustee5})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic7 = {
        background: `url(${trustee7})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }

    const teamPic8 = {
        background: `url(${trustee9})`,
        backgroundSize: "cover",
        backgroundPoition: 'center',
    }


    const [profile, setProfile] = useState(false);
    
    function cancel() {
        setProfile(!profile)
    }

    const [currentProfile, setCurrentProfile] = useState({
       name: "",
       writeUp: "",
    })

    function showProfile(event) {
         setCurrentProfile((prev)=> {
            if([event.target.name] == "odunola") {
               return {
                name: "Odunola Abayomi",
                writeUp: " Amb. Odunola Abayomi is a seasoned business coach, mentor, brand & media consultant with over a decade experience in the tech and photography industry. Her extensive background includes helping businesses, projects, and events achieve their cardinal goals through strategic branding, digital media marketing, advertising, and public relations. As a trained media and tech specialist, she has had the privilege of working with national and multinational brands both within and outside Nigeria and has made significant contributions to the public relations space. She has empowered countless SMEs across Africa to become self sustainable and has spearheaded successful social media campaigns for major brands. Her expertise in managing and branding SMEs has led to the successful completion of numerous online projects. Her passion for imparting knowledge is evident in her role as a mentor, guest speaker, and moderator at various events. She is the host of 'The TOD Show,' a television program that highlights successful businesses and outstanding personalities contributing to the Nigerian economy and inspiring humanity across Africa and she also runs a non-governmental initiative called 'Give Back with T'Odunola,' aimed at supporting less privileged and rural communities through donations of books and other materials sourced from urban areas. This initiative aligns with SDGs 1, 4, 7, and 11, demonstrating her commitment to transforming the world through collective and individual efforts. She has received several awards and is an active member of communities and associations, including Toastmasters International, Junior Chamber International JCI, Rotary Club, and Techmentors. Her dedication to supporting and empowering African teenagers is reflected in her involvement with Techmentor Skills Empowerment Foundation. She is passionate about providing young Africans with the necessary technological skills and opportunities to thrive in today's digital world. As the Executive Director of Programs at Techmentors Skills Empowerment Foundation, she oversees the development, coordination, and implementation of educational and empowerment initiatives. This includes designing programs, strategic planning, ensuring program effectiveness, and building stakeholder relationships."
               }
            }else if([event.target.name] == "nwaeke") {
                return {
                 name: "Nwaeke Chioma",
                 writeUp: "Nwaeke Chioma Augustina is a visionary leader with a passion for transforming lives through education and technology. With a background in media and legal matters, she brings a wealth of experience to our foundation. Throughout her career, she has championed initiatives that bridge the digital divide and empower young minds in Africa. She has served and held various positions in both media and law enforcement agency, including Don Pedro mediator or the Nigeria local content program under the Nigerian Content Development and Monitoring Board (NCDMB), the National Agency for the Prohibition of Trafficking in Persons and Other Related Matters (NAPTIP) and NEXPORTRADE Houses.Her inspiration to collaborate and empower African teenagers stems from her belief in their potential to shape a brighter future with the help of technology using her experience in education. She is dedicated to providing the necessary skills, support, mentorship, and opportunities to help teenagers realize their full potential and become positive change agents in their communities. Her commitment to this cause reflects her passion for creating a more empowered and enlightened future for the next generation in Africa. As the Executive Director of Legal Compliance, Brand Management, and Communication at Techmentors Skills Empowerment Foundation, she ensures that the foundation's operations comply with all relevant laws, regulations, and ethical standards. She is also responsible for developing and implementing a comprehensive brand strategy that aligns with the foundation's mission and values."
                }
             }else if([event.target.name] == "isreal") {
                return {
                 name: "Isreal Akpan",
                 writeUp: "Israel Akpan is a dynamic Business Manager and Turnaround Specialist with over two decades of extensive experience in Human Resource and General Logistics Consulting. Throughout his illustrious career, he has held various leadership positions in both national and multinational organizations, including Carlson Wagonlit Travel, Federal Express, and Shell Petroleum Development Company (SPDC). In these roles, he has significantly contributed to strategic growth and profitability through his commitment to team collaboration, goal orientation, and results driven strategies. Motivation to support and empower African teenagers stems from his profound belief in the potential of young people to transform their communities and the world through technology. He is dedicated to providing the necessary skills, mentorship, and opportunities that enable teenagers to realize their full potential and become catalysts for positive change in Africa. His commitment to this cause is a testament to his passion for creating a brighter, more empowered future for the next generation. His expertise spans Training, Learning, Coaching, Mentoring, and Human Resource Management, reflecting a comprehensive understanding of business operations and personnel development. As the Executive Director of Operations, Human Resources, General Administration, and Quality Assurance at Techmentor Skills Empowerment Foundation, he drives operational excellence, oversees human resource functions, manages general administration, and ensures quality assurance across all aspects of the organization."
                }
             }else if([event.target.name] == "kasiemobi") {
                return {
                 name: "Kasiemobi Anastasia",
                 writeUp: "no info yet"
                }
             }
         })
         setProfile(!profile)
         console.log(currentProfile)
    }  

   function display(event) {
     console.log([event.target.name])
   }

   const spec = {
     background: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("${who1}")`,
     backgroundSize: `cover`,
     
   }


    return (
        <div className="team">
            {profile ? <div className='trustee-container'>
                <div className='cancelBtn' ><h1 className='x' onClick={cancel}>X</h1></div>
                <div className='trustee-box'>
                    <div className='trustee-pic'></div>
                    <p className='trustee-text'>
                        <h1>{currentProfile.name}</h1>
                       {currentProfile.writeUp}
                    </p>
                    <div className="team-socials">
                        <div className="social-1">
                            
                        </div>
                        <div className="social-2">
                            
                        </div>
                        <div className="social-3">
                         
                        </div>
                    </div>
                </div>
            </div>: ""}
            <div className="team-top" style={spec}>
                <div className="t-top-left">
                    <p>OUR</p>
                    <h1>
                        TEAM
                    </h1>
                </div>
                <div className="t-top-right">
                    
                </div>
            </div>

            <div className="team-bottom">
                <div name="odunola" className="team-box"  >
                <NavLink to="../tProfile2" className="none" onClick={scrollToTop}> <div className="team-pic" style={teamPic1}></div> </NavLink>
                <NavLink to="../tProfile2" className="none" onClick={scrollToTop}> <div className="team-info">
                        <h2>Isreal Akpan</h2>
                        <p>HR and General Administration</p>
                    </div> </NavLink>
                    
                    <div className="team-socials">
                        <div className="social-1">
                          
                        </div>
                        <div className="social-2">
                     
                        </div>
                        <div className="social-3">
                         
                        </div>
                    </div>
                </div>

                <div className="team-box">
                <NavLink to="../tProfile3" className="none" onClick={scrollToTop}> <div className="team-pic t-pic2" style={teamPic2}></div></NavLink>
                <NavLink to="../tProfile3" className="none" onClick={scrollToTop}><div className="team-info">
                        <h2>Nwaeke Chioma</h2>
                        <p>Legal and compliances</p> 
                    </div></NavLink>
                   
                    <div className="team-socials">
                        <div className="social-1">
                            
                        </div>
                        <div className="social-2">
                            
                        </div>
                        <div className="social-3">
                           
                        </div>
                    </div>
                </div>

                <div className="team-box">
                    <div className="team-pic t-pic3" style={teamPic3}></div>
                    <div className="team-info team-info2">
                        <h2>Kasiemobi Anastasia</h2>
                        <p>Secretary</p>
                    </div>
               
                    <div className="team-socials">
                        <div className="social-1">
                          
                        </div>
                        <div className="social-2">
                           
                        </div>
                        <div className="social-3">
                           
                        </div>
                    </div>
                </div>
            </div>


            <div className="team-bottom">
                <div className="team-box">
                   <NavLink to="../tProfile1" className="none" onClick={scrollToTop}><div className="team-pic" style={teamPic4}></div></NavLink>
                   <NavLink to="../tProfile1" className="none" onClick={scrollToTop}><div className="team-info">
                        <h2>Odunola Abayomi</h2>
                        <p>Programs</p>
                    </div></NavLink> 
                  
                    <div className="team-socials">
                        <div className="social-1">
                            
                        </div>
                        <div className="social-2">
                          
                        </div>
                        <div className="social-3">
                            
                        </div>
                    </div>
                </div>

                

                <div className="team-box">
                    <div className="team-pic t-pic3" style={teamPic7}></div>
                    <div className="team-info">
                        <h2>Bright Kanu </h2>
                        <p>Finance</p>
                    </div>
               
                    <div className="team-socials">
                        <div className="social-1">
                          
                        </div>
                        <div className="social-2">
                            
                        </div>
                        <div className="social-3">
                        
                        </div>
                    </div>
                </div>


            </div>

            <div className="team-bottom">
                

                <div className="team-box">

                </div>

                <div className="team-box">


                </div>


            </div>


        </div>
    )
}
/*  <input type="submit" name='nwaeke' onClick={showProfile} className='showBtn'/> */

export default Team;