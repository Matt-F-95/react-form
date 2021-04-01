
import LazyHero from 'react-lazy-hero';

function Home () {
    return(
        <div>
               <LazyHero color="#000" opacity="0.2" parallaxOffset="40" imageSrc="hero_img.jpg">
                <h1 className="text-5xl text-white">CANADIAN DAIRY INDUSTRY</h1>
                <br></br>
                <span className="text-xl text-white">THE VALUE OF MILK AND DAIRY MANUFACTURING SHIPMENTS IN CANADA<br></br> AMOUNTED TO ABOUT 14.8 BILLION CANADIAN DOLLARS IN 2019.</span>
            </LazyHero>

           <div className="container">
               <h2 className="text-3xl">Our Products</h2>
              
               <h2 className="text-3xl">Image of the Week</h2>



               
           </div>
        </div>
    )
}

export default Home;