import contactbg from './images/contactbg.png';

function Contact() {
    return(
        <div id="bg_contact" style={{ backgroundImage: `url(${contactbg})` }}>
            <div class="container-fluid">
                <div class="container">
                    <p class="text-6xl mx-14 w-11/12 py-10 text-white">Contact Us</p>
                    <div class="flex lg:flex-row flex-col">
                        <div class="lg:w-3/5 w-full p-4">
                            <label for="yourName"><p class="text-left text-white text-lg">What's Your Name?</p></label>
                            <input class="w-full shadow hover:bg-gray-200 focus:bg-gray-200 bg-gray-200 text-black border border-gray-200 rounded my-3 p-4" id="yourName" name="yourName" type="text" placeholder="Enter Full Name"></input>
                            <label for="email"><p class="text-left text-white text-lg">What's Your Email?</p></label>
                            <input class="w-full shadow hover:bg-gray-200 focus:bg-gray-200 bg-gray-200 text-black border border-gray-200 rounded my-3 p-4" id="email" name="email" type="email" placeholder="Enter Email"></input>
                            <label for="subject"><p class="text-left text-white text-lg">What's the Subject?</p></label>
                            <input class="w-full shadow hover:bg-gray-200 focus:bg-gray-200 bg-gray-200 text-black border border-gray-200 rounded my-3 p-4" id="subject" name="subject" type="text" placeholder="Enter Subject"></input>
                            <label for="message"><p class="text-left text-white text-lg">What's Your Message?</p></label>
                            <input class="w-full shadow hover:bg-gray-100 focus:bg-gray-0 bg-gray-200 text-black border border-gray-200 rounded min-w-min my-3 p-4" id="message" name="message" type="text" placeholder="Enter Message"></input>
                            <button class="rounded bg-green-600 text-white p-3 mt-2 mb-5 align-right" type="submit" value="submit" id="formSubmit">Submit Message</button>
                        </div>
                        <div class="lg:w-2/5 w-full p-4">
                            <div class="">
                                <h1 class="font-bold text-white leading-8 text-3xl">Our Contact Details</h1>
                                <p class="text-white leading-8 text-left flex my-6"><span><img class="contact_icon mx-2" src="mail_icon.svg" alt="Mail Icon SVG" /></span>info@vache.ca</p>
                                <p class="text-white leading-8 text-left flex my-6"><span><img class="contact_icon mx-2" src="phone_icon.svg" alt="Phone Icon SVG" /></span>+1 (416)-383-1463</p>
                                <p class="text-white leading-8 text-left flex my-6"><span><img class="contact_icon mx-2" src="address_icon.svg" alt="Address Icon SVG" /></span>603 Richmond Hwy, Toronto, ON, Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;