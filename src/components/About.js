import IMG_ABOUT from "../../public/images/burger-image.png"
import FOUNDER_IMG from "../../public/images/founder.jpg"
import { Link } from "react-router-dom"

const About =()=>{

return(
    <div className="min-h-lvh mb-3">
        <div className=" bg-gray-800 pb-5">
            <div className="pt-28 grid grid-cols-1 md:grid-cols-2 place-items-center max-w-screen-xl mx-auto px-8">
                <h1 className="text-5xl font-bold text-white leading-normal pb-5 md:pb-0 text-center lg:text-start">Welcome to The world of <br /><span className="bg-orange-400 text-white px-2 rounded-md">Tasty & Twist</span></h1>
                <img src={IMG_ABOUT} alt="" />
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-16 pt-8">
                <div>
                    <h1 className="text-3xl font-bold ">AKHIL MK (founder)</h1>
                    <p className="pt-3 text-lg text-justify italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet esse reprehenderit atque sed suscipit natus? Qui quasi autem, dolorem iure nobis nisi delectus suscipit maxime! Quae vero itaque cum dolorem, voluptatibus eveniet necessitatibus tempore maxime quibusdam fugit porro excepturi dignissimos quo, illum corrupti amet unde! Obcaecati impedit dolorem voluptatibus distinctio fugiat odit necessitatibus officia, a qui nesciunt neque recusandae nulla vero inventore adipisci nam veniam! Pariatur, inventore esse.</p>
                    <div className="flex justify-start mt-6">
                        <Link to="https://www.linkedin.com/in/akhil-mk-9874b91b2/"><i className="fa-brands fa-2xl mr-3 fa-linkedin text-blue-500"></i></Link>
                        <Link to="https://github.com/Akhil-m-k"><i className="fa-brands fa-2xl mr-3 fa-github"></i></Link>
                        <Link to="https://leetcode.com/Akhil_mk/"><i className="fa-solid fa-2xl mr-3 fa-code text-orange-400"></i></Link>
                    </div>
                </div>
                <img src={FOUNDER_IMG} alt="" className=" pr-3  pt-3  border-r-8 border-t-8 border-orange-500 max-h-96 " />
            </div>
        </div>
    </div>
)
}
export default About;