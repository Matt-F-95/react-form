import contactbg from './images/contactbg.jpg';
import FacebookIcon from './images/facebook_icon.svg';
import InstagramIcon from './images/instagram_icon.svg';
import TwitterIcon from './images/twitter_icon.svg';
import PinterestIcon from './images/pinterest_icon.svg';
import React, { useState } from 'react';


const Contact = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [isValidated, setIsValidated] = useState(false);
    
    function hasCharsCheck(dataToCheck) {
        let pattern = /^[a-zA-Z]{2,60}$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasEmailCheck(dataToCheck) {
        let pattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function hasMessageCheck(dataToCheck) {
        let pattern = /^[a-zA-Z0-9\s,. '-]{3,}$/;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    // function hasDobCheck(dataToCheck) {
    //     let pattern = /^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/;
    //     if (pattern.test(dataToCheck)) {
    //         return true;
    //     }
    //     return false;
    // }
    
    function hasPhoneCheck(dataToCheck) {
        let pattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        if (pattern.test(dataToCheck)) {
            return true;
        }
        return false;
    }
    
    function successMessage(e) {
        console.log('Pop up!');

        let popUp = document.getElementById('popUp');
        popUp.style.display = "block";
    }

    function goToHome(e) {
        console.log('Thank you user!');
        props.history.push('/')
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsValidated(true);


        
        if (firstName && lastName && emailAddress && phoneNumber && message) {
            console.log('values filled');
            // goToPhotoBooth();
            successMessage();
        } else {
            console.log('values are missing');
        }
        console.log(firstName,lastName,emailAddress,phoneNumber,message);
    };


    
    return (
        
        <div className="relative">
            <div className="h-full absolute bg-black bg-opacity-80 w-full hidden" id="popUp">
                <div className="flex justify-center items-center h-full">
                    <div className="shadow-xl h-96 w-9/12 lg:w-2/4 p-6 m-6 bg-white flex flex-col justify-center items-center">
                        <p className="text-4xl text-center my-4">Thank you the inqury!</p>
                        <p className="text-base text-center my-8">Expect a response to your inqury within 2-3 business days. Follow us on social media to keep up with upcoming news and promotions!</p>
                        <button className="rounded bg-blue-500	 text-white p-3 mt-2 mb-5 align-right shadow" type="submit" value="submit" id="contactSubmit" onClick={goToHome}>Continue</button>
                    </div>
                </div>
            </div>
            <div className="contact_hero h-96 bg-cover bg-center" style={{ backgroundImage: `url(${contactbg})` }}>
                <div className="bg-gray-900	bg-opacity-40 h-full">
                    <div className="flex justify-center items-center flex-col h-full w-full">
                        <p className="text-5xl my-8 text-white">CONTACT US</p>
                        <p className="text-lg uppercase text-white mx-4">Have any question or need assistance? <br /> We are here to help you with anything you need!</p>
                    </div>
                </div>
            </div>
            <div className="flex container lg:flex-row flex-col">
                <div className="flex-initial lg:w-2/4 w-full lg:p-10 px-6">
                    <form className="milkForm my-6">
                        <p className="text-4xl  mt-2 font-bold text-center my-4">Get in Touch with us!</p>
                        <p className="text-lg  mt-2 font-normal text-center my-4">Please fill out the form below to get in touch with us today.</p>
                        <fieldset>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="firstName" className="uppercase text-left tracking-wide text-black text-s font-bold mb-2">First Name:</label>
                                <input  className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="firstName" name="firstName" type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
                                <p className="text-red-600" id="firstNameError"></p>
                                {hasCharsCheck(firstName) ? "" : isValidated === true ?
                                <p className="text-red-600" id="firstNameError">Please enter your first name.</p> : ""}
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label htmlFor="lastName" className="uppercase tracking-wide text-black text-s font-bold mb-2">Last Name:</label>
                                <input className="w-full hover:bg-gray-200 focus:bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="lastName" name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}></input>
                            {hasCharsCheck(lastName) ? "" : isValidated === true ? <p className="text-red-600" id="lastNameError">Please enter your last name.</p> : ""}
                            </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="phoneNumber" className="uppercase tracking-wide text-black text-s font-bold mb-2">Phone Number:</label>
                                <input  className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="phoneNumber" name="phoneNumber" type="text" placeholder="Phone number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}></input>
                                {hasPhoneCheck(phoneNumber) ? "" : isValidated === true ? 
                                <p className="text-red-600" id="phoneNumberError">Please enter your phone number.</p> : ""}
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label htmlFor="emailAddress" className="uppercase tracking-wide text-black text-s font-bold mb-2">Email Address:</label>
                                <input className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="emailAddress" name="emailAddress" type="text"
                                    placeholder="Email Address" value={emailAddress} onChange={(e)=> setEmailAddress(e.target.value)}></input>
                                {hasEmailCheck(emailAddress) ? "" : isValidated === true ? <p className="text-red-600" id="emailAddressError">Please enter your email address.</p> : ""}
                            </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3 mb-6 md:mb-0">
                                    <label htmlFor="message" className="uppercase tracking-wide text-black text-s font-bold mb-2">message:</label><input className="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                        id="message" name="message" type="text" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}></input>
                                    <p className="text-red-600" id="addressError"></p>
                                    {hasMessageCheck(message) ? "" : isValidated === true ? <p className="text-red-600" id="messageError">Please enter your message.</p> : ""}
                                </div>
                            </div>
                        </fieldset>            
                        <button className="rounded bg-green-600 text-white p-3 mt-2 mb-5 align-right" type="submit" value="submit" id="contactSubmit" onClick={handleSubmit}>Send Message</button>
                    </form>
                </div>
                <div className="w-full md:flex-row md:flex-wrap lg:h-2/4 h-auto lg:w-2/4 lg:p-10 px-6 flex flex-col">
                    <div className="my-2 lg:w-full lg:h-auto md:w-1/2">
                        <p className="text-xl font-bold text-left">Phone</p>
                        <p className="text-lg text-normal text-left my-2">+1 (416)-383-1463</p>
                    </div>
                    <div className="my-2 lg:w-full lg:h-auto md:w-1/2">
                        <p className="text-xl font-bold text-left">Address</p>
                        <p className="text-lg text-normal text-left my-2">603 Richmond Hwy, Toronto, ON, Canada</p>
                    </div>
                    <div className="my-2 lg:w-full lg:h-auto md:w-1/2">
                        <p className="text-xl font-bold text-left">Email</p>
                        <p className="text-lg text-normal text-left my-2">info@vache.ca</p>
                    </div>
                    <div className="my-2 lg:w-full lg:h-auto md:w-1/2">
                        <p className="text-xl font-bold text-left">Socials</p>
                        <div className="flex flex-row justify-left">
                            <a href="https://www.instagram.com"><img className="w-14 my-2 mx-2" src={InstagramIcon} alt="Instagram Icon" /></a>
                            <a href="https://www.facebook.com"><img className="w-14 my-2 mx-2" src={FacebookIcon} alt="Facebook Icon" /></a>
                            <a href="https://www.twitter.com"><img className="w-14 my-2 mx-2" src={TwitterIcon} alt="Twitter Icon" /></a>
                            <a href="https://www.pinterest.com"><img className="w-14 my-2 mx-2" src={PinterestIcon} alt="Pinterest Icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default Contact;