import aboutHero from './images/about_hero.jpg';
import AboutSectionImage from './images/about_image.jpg';
import CanadaLeaf from './images/canada.svg';

function About() {
    return (
        <div>
            <main>
                <section id="about_intro" style={{ backgroundImage: `url(${aboutHero})` }}>
                    <div id="content_hero" class="flex flex-row h-full">
                        <div class="lg:w-4/5 md:w-5/5 sm:w-full items-center flex justify-center h-full">
                            <div class="p-8 flex flex-col item-center">
                                <p class="text-7xl text-left mb-10">The Dairy Company of Canada's Future </p>
                                <p class="text-left lg:w-3/5 leading-relaxed">Here at Vache&copy; we're focused on providing the highest quality milk and dairy products to our fellow canadian's as well as raising awareness to help inspire healthy and active lifestyles. </p>
                            </div>
                        </div>
                    </div>                
                </section>
                <section id="content_about">
                    <div class="flex flex-row bg-white	">
                        <div class="flex flex-wrap w-full container p-8">
                            <div class="md:w-2/5 w-full p-4">
                                <p class="text-5xl text-left">Who is Vache?</p>
                            </div>
                            <div class="md:w-3/5 w-full p-4">
                                <p class="text-left leading-relaxed">We believe milk, the purest form of dairy, is a powerful gift from nature. Full of nutrients, protein and great taste, milk forms the foundation of our nourishment from the very beginning. </p> 
                                <br/>
                                <p class="text-left leading-relaxed">We specialize in delicious, dairy-based products to give everyone the nutrition they need, but we know our products are only one piece of a much larger purpose. We are on a mission to enrich lives by sustainably providing nourishment and vitality to the world.</p>
                                <br/>
                                <p class="text-left leading-relaxed">Today, our vision extends far beyond the bottle. By harnessing the power of curiosity and innovation, we can strive for more than delicious dairy—we can work to make the world a better place.</p>
                            </div>
                        </div>
                    </div>
                    <div id="canadian_tag_about" class="bg-gray-800">
                        <div class="flex flex-col container justify-center item-center p-8 max-w-3xl">
                            <p class="text-5xl leading-normal flex flex-row item-center justify-center flex-wrap text-white">A Proudly Canadian Company <span><img id="ca_icon" alt="" src={CanadaLeaf}></img></span></p>
                            <br />
                            <p class="text-lg text-center leading-relaxed text-white">We're are proudly Canadian company founded in Oshawa, Ontario. Our team has a strong passion to provide only the highest of quailty dairy products with local Ontario farms.</p>
                        </div>
                    </div>
                    <div id="other_info_about">
                        <div class="flex flex-wrap container p-8">
                            <div class="md:w-2/5 w-full">
                                <p class="text-4xl mb-5 text-left">Vision & Values</p>
                            </div>
                            <div class="md:w-3/5 w-full">
                                <p class="text-left leading-relaxed">As proud supporters of the Canadian dairy industry and its farmers, it’s our mission to provide Canadians with nutritious, high-quality products they’ll love.</p> 
                                <br/>
                                <p class="text-left leading-relaxed">Consumers are at the heart of what we do. That’s why we’re committed to strengthening communities across the country, and to continue making a significant contribution to the Canadian economy.</p>
                                <br/>
                                <p class="text-left leading-relaxed">We’re committed to innovation in our business practices, our products and our services to ensure we are the preferred supplier of our customers.</p>
                                <br/>
                                <p class="text-left leading-relaxed">We foster a safe, open, trusting team environment in which individual initiative, mutual respect, integrity, and personal dignity are promoted and rewarded.</p>
                                <br/>
                                <p class="text-left leading-relaxed">We’re committed to ongoing education and development as we strive for continuous improvement in the quality of everything we do.</p>
                            </div>
                        </div>
                        <div class="container flex flex-wrap  p-8">
                            <div class="md:w-3/5 sm:w-full">
                                <p class="text-4xl mb-5 text-left">Pledges & Promises</p>
                                <p class="text-base text-left leading-relaxed">We believe the best dairy products begin with milk from healthy, well cared for animals. We pledge to continue to promote best practices in dairy animal care.</p>
                                <br />
                                <p class="text-base text-left leading-relaxed">Vache is committed to the well-being of its consumers and helps them to make healthy choices.</p>
                                <br />
                                <p class="text-base text-left leading-relaxed">Enjoy our full range of healthy and delicious products from milk to creams. We also offer a wide variety of Premium milks to meet your health needs. At Vache, we know that milk is as important to your family, as it is to ours.</p>
                            </div>
                            <div class="md:w-2/5 sm:w-full">
                                <img id="about_image" alt="" src={AboutSectionImage} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default About;