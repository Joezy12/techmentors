import signature from "../../public/signature.jpeg"
import mentor1 from "../../public/mentor1.jpeg"
import mentor2 from "../../public/mentor2.jpeg"
import mentor3 from "../../public/mentor3.jpeg"



function FoundersLetter() {
    return (
        <div className="founders-letter new">
            <div className="founders-banner">
                <h1>FOUNDER'S LETTER</h1>
            </div>

            <div className="founders-main">
                <p>

                    It is with great pride and a deep sense of purpose that I write to you as the founder and chairman of Techmentors Skills Empowerment Foundation. Our journey began with a simple yet powerful vision to empower African teenagers with the technological skills, knowledge, and opportunities they require to build successful futures and, in doing so, contribute to the sustainable development of our beloved continent.<br /><br />

                    The inspiration to build a system for African teenagers to be empowered through technology and mentorship originated from my personal struggles as a teenager in Nigeria. Growing up in Africa, particularly in a traditional family where education was not given the importance it deserved, I witnessed the challenges young people like me faced in achieving their academic dreams. For decades, as a young aspiring African, I saw how poverty and lack of skills, often compounded by limited access to quality education, training, and economic opportunities, stifled potential and trapped young Africans in a cycle of hardship. Living with a mother who constantly lamented how society neglected the development of the girl child and how young women were forced to embrace early marriage as their only pathway to freedom, ignited a passion in me to make a difference. These experiences ignited a passion in me to make a difference, to create a system for African teenagers especially the girl child to realize their full potential and to break free from the cycle of poverty and unemployment. <br /><br />
                    <div className="found"><img src={mentor1} alt="" className="found"/></div>
                   

                    In February 2024, the Techmentors Skills Empowerment Foundation was founded out of this passion. We recognized that the future of Africa depends on the empowerment of its young people. Through targeted skills training, mentorship and empowerment we set out to equip our teenagers with the tools they need to succeed in an increasingly competitive and technology-driven world. <br /><br />

                    Since the inception of this initiative, we have witnessed incredible transformations among our teenagers. African teenagers who once faced seemingly insurmountable obstacles are now thriving as skilled professionals, innovating in various technological fields. <br /><br />

                    At TechMentors, we believe in the power of collaboration. We know that we cannot achieve our mission alone, which is why we have forged strong partnerships with governments, development agzncies, private sector organizations, and communities across Africa. Together, we are creating a supportive ecosystem that enables our teenagers to learn, grow, and contribute meaningfully to society. <br /><br />
                    <div className="found"><img src={mentor2} alt="" className="found"/></div>

                    We also understand that the challenges we face are not static. The world is changing rapidly, and new challenges such as economic instability, technological disruption, and global warming require us to be adaptable and innovative in our approach. This is why we are constantly evolving our programs to ensure that our teenagers are equipped with the most relevant and up-to-date skills. <br /><br />

                    Youth unemployment remains one of the most significant challenges on our continent, and it is a crisis that demands urgent action. At TechMentors, we are committed to addressing this issue head-on by fostering a culture of empowerment through technology and innovation. We believe that "it's easier to mold a child than to repair an adult." <br /><br />

                    As we look to the future, our commitment to empowering young Africans remains unwavering. We are expanding our reach, deepening our impact, and continuously seeking new ways to support the aspirations of our teenagers, especially the girl child. We are determined to ensure that every young person in Africa has the opportunity to achieve their dreams and contribute to the prosperity of our continent. <br /><br />
                    <div className="found"><img src={mentor3} alt="" className="found"/></div>


                    I invite you to join us on this journey. Whether you are a potential partner, supporter, or simply someone who shares our vision, your involvement is crucial. Together, we can make a lasting difference in the lives of African teenagers and, in doing so, help shape a more prosperous, equitable, and sustainable future for our continent. <br /><br />

                    Thank you for your continued support and belief in our mission. The future of Africa is bright, and with your help, we will continue to empower the next generation of leaders, innovators, and changemakers.

                    With gratitude and determination,
                </p>
                
            </div>
            <h3>Yours Sincerely</h3>
           <div className="sign"> <img src={signature} /></div>
            <h3>Nsikak Isaiah</h3>
            <h3>Chairman, Techmentors Skills Empowerment Foundation</h3>
        </div>
    )
}


export default FoundersLetter;