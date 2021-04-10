import legalHero from './images/legal_hero.jpg';

function Legal() {
    return (
        <div>
            <main>
                <section className="h-96 bg-cover bg-center" style={{ backgroundImage: `url(${legalHero})` }}>
                    <div class="flex flex-row bg-black bg-opacity-60 h-full">
                        <div class="w-full items-center flex justify-center h-full">
                            <div class="p-8 flex flex-col item-center">
                                <p class="text-5xl text-center mb-10 uppercase text-white">CONDITIONS & POLICIES</p>
                                <p class="text-center text-lg lg:w-3/5 mx-auto uppercase text-white leading-relaxed">learn more about the terms conditions of the photobooth contest, along with our privacy policy regarding the data being stored</p>
                            </div>
                        </div>
                    </div>                
                </section>
                <section className="w-1/2 mx-auto legalPage">
                    <article className="text-left">
                        <h2 className="text-2xl font-bold text-gray-800 my-4">Our Privacy Policy</h2>
                        <p>At Vache, we are committed to safely and securely maintaining the privacy and security of our users’ personal information and data. By agreeing to our privacy policy, you’re allow personal information that may include, your name, address, phone number, email, and age. The information provided will help improve our photobooth contest, advertising products, and selling of various dairy products. The data provide will help verify information such as, citizenship, age, and name for the purpose of refining the quality of the contest winners and choosing approved candidates. In addition, Vache reserves all rights to store your personal data as well as distribute personal data such as, name, phone number, or email to third party companies.</p>
                    </article>
                    <article className="text-left">
                        <h2 className="text-2xl font-bold text-gray-800 my-4">Conditions relating to the ownership of images submitted to the site</h2>
                        <p>Upon agreeing to our conditions of the contest you’re giving consent for Vache to hold ownership of image as well as your likeness in the event your image is chosen as the winner or submitted into the contest. Contestants cannot claim the ownership of the image, after agreeing to our terms of use and privacy policy. In the event a user did not provide valid information such as, legal age, invalid information, guardian/parent information (if under aged), or providing a false identity the images will be deleted from server and be seen ineligible to be a winning image in the contest.</p>
                    </article>
                    <article className="text-left">
                        <h2 className="text-2xl font-bold text-gray-800 my-4">Conditions relating to the usage of data collected on the site</h2>
                        <p>Vache holds the rights to collect various personal information from the users such as, their first and last name, age, address, phone number, email, and/or guardian information. In addition, information provided may be used for analytics or demographics to help quality assurance, promotional advertising, or distribution to third parties companies. In addition, data such as, first name, last name first initial, along with your city and province will be showcase on our homepage, in addition to in theatres, stores, or other locations. By agree to our terms of service and contest rules and conditions you’re agree to have your data and image shown in public locations and on our website.</p>
                    </article>
                    <article className="text-left">
                        <h2 className="text-2xl font-bold text-gray-800 my-4">Conditions relating to minimum age of users (no users under the age of 18 without a guardians permission)</h2>
                        <p>In the event a candidate has entered the contest is under the minimum age and does not provide their parent or guardians information the contestant will not be eligible to win the contest and will have their entry revoked, along with a suspension of the account then will need to be subjected to further information such as, proof of identity, parent and/or guardian’s information, and updating account details. If the candidate does not provide information within 14 days of notice, then information provided will be deleted, along with any subsequent data such as, name, address, number, or image. Furthermore, if not action is taken the data for the user may be used to audit further submission present and future contests.</p>
                    </article>
                    <article className="text-left">
                        <h2 className="text-2xl font-bold text-gray-800 my-4">Conditions relating to the chance of winning and prize distrubution</h2>
                        <p>At Vache, we believe in providing equality and diversity for all contestant and providing an equal opportunity for a chancs of winning the contest regardless of age, gender, sex, race, religion, or sexuality of all our candidates entered to the contest. Moreover, we require all candidates provide valid information to be eligible to win the contest and have your image featured on our homepage, along with various public locations, or on advertisements. We audit of each winner to review and confirm the contestant’s information and proof of identity. Any actions such as, cheating, lying, or below legal age without parent or guardian’s information may result in permeant bans from contest, removal of accounts, and potential lifetime bans from other contest as well. </p>
                    </article>
                    <article className="text-left">
                        <h2 className="text-2xl font-bold text-gray-800 my-4">Conditions relating to opting out of communications</h2>
                        <p>In the event, a contestant or user wishes to opt out of communication the user will need to provide account detail such as, their phone number, email, full name, and address. If the contestant wishes to not receive communication, then cannot be reached to confirm the users account information Vache will not be liable for any damages as well as legally responsible to any subsequent repercussions such as, receiving an invalid entry, account removal, or banning from further contests. We suggest that users opt in for receiving communications as it may result in the participant forfeit of the contest. If participant does not respond to the inquiry into the audit of determining the winner, then a new winner may be chosen instead.</p>
                    </article>
                    <article className="text-left">
                        <h2 className="text-2xl font-bold text-gray-800 my-4">Contacting Us</h2>
                        <p>Contacting us
                        If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to support@vachephotobooth.ca.
                        <br></br><br></br></p>
                        <p className="text-red-900">This document was last updated on April 1, 2021</p>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Legal;