
import LazyHero from 'react-lazy-hero';
import { Link } from 'react-router-dom';
import PlaceHolderWebcam from './images/placeholder-winner-photo.jpg';
import SlickSlider from './ReactSlider';
import HeroImage from './images/hero_img.jpg';





function Home (props) {
    return(
        <div>
               <LazyHero color="#000" opacity="0.2" parallaxOffset="40" imageSrc={HeroImage}>
                <h1 className="text-5xl text-white">CANADIAN DAIRY INDUSTRY</h1>
                <br></br>
                <span className="text-xl text-white">THE VALUE OF MILK AND DAIRY MANUFACTURING SHIPMENTS IN CANADA<br></br> AMOUNTED TO ABOUT 14.8 BILLION CANADIAN DOLLARS IN 2019.</span>
            </LazyHero>

           <div className="container">
               <h2 className="text-5xl mt-10 mb-5">Our Products</h2>
               
                <SlickSlider />
            
               <h2 className="text-5xl">Image of the Week</h2>
               <div className="flex flex-row bg-white	">
                        <div class="flex flex-wrap w-full container p-8">
                            <div className="md:w-2/5 w-full p-4">
                                <img src={PlaceHolderWebcam} alt=""></img>
                                <div className="bg-gray-800 text-white">
                                    <div className="flex justify-between pt-1 pb-1 pr-2 pl-2">
                                    <p className="flex">Jonathan M.</p>
                                    <p className="flex"><small>Burlington, ONT</small></p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="md:w-3/5 w-full p-4">
                                <h4 className="text-3xl mb-5">Enter the Contest Today!</h4>
                                <p className="text-left leading-relaxed">Winners of the contest will be chosen weekly and have their images featured on our homepage as well as in grocery stories, movies theatres, and on TV.</p> 
                                <br/>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to={`${process.env.PUBLIC_URL}/form`}>Contest</Link></button> <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"><Link to={`${process.env.PUBLIC_URL}/legal`}>Terms & Conditions</Link></button>
                            </div>
                        </div>
                    </div>



               
           </div>
        </div>
    )
}

export default Home;