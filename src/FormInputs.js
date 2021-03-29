import React, { useState } from 'react';

const FormInputs = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [birthday, setBirthday] = useState('')
    const [address, setAddress] = useState('')
    const [guardianFirstName, setGuardianFirstName] = useState('')
    const [guardianLastName, setGuardianLastName] = useState('')
    const [guardianPhoneNumber, setGuardianPhoneNumber] = useState('')
    const [skillTestQuestion, setSkillTestQuestion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,emailAddress,phoneNumber,birthday,address,guardianFirstName,guardianLastName,guardianPhoneNumber,skillTestQuestion);
    };
    return (
        <div>
        <div class="container flex m-10 p-10">
        <div class="imageContainer md:flex-initial lg:flex-initial">
        <div class="wrapper">
            <div class="centered">
                <h2 class="text-6xl text-left" id="randomBlurbs">Chance to be featured on our website &amp; social media!</h2>
            </div>
        </div>
    </div>
    
    <div class="flex-initial">
        <form class="milkForm" onSubmit={handleSubmit}>
            
            <legend class="text-2xl mb-5 mt-2 font-bold">Contestant Information</legend>
            <fieldset>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="firstName" class="uppercase tracking-wide text-black text-s font-bold mb-2">First Name:</label><input  class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="firstName" name="firstName" type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
                    <p class="text-red-600" id="firstNameError"></p>
                </div>
                <div class="md:w-1/2 px-3">
                    <label htmlFor="lastName" class="uppercase tracking-wide text-black text-s font-bold mb-2">Last Name:</label><input class="w-full hover:bg-gray-200 focus:bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="lastName" name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}></input>
                    <p class="text-red-600" id="lastNameError"></p>
                </div>
                </div>
            </fieldset>
            <fieldset>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="emailAddress" class="uppercase tracking-wide text-black text-s font-bold mb-2">Email Address:</label><input
                    class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="emailAddress" name="emailAddress" type="text"
                        placeholder="Email Address" value={emailAddress} onChange={(e)=> setEmailAddress(e.target.value)}></input>
                    <p class="text-red-600" id="emailAddressError"></p>
                </div>

                <div class="md:w-1/2 px-3">
                    <label htmlFor="phoneNumber" class="uppercase tracking-wide text-black text-s font-bold mb-2">Phone Number:</label><input  class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="phoneNumber" name="phoneNumber" type="text" placeholder="Phone number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}></input>
                    <p class="text-red-600" id="phoneNumberError"></p>
                </div>
                </div>
            </fieldset>
            <fieldset>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="birthday" class="uppercase tracking-wide text-black text-s font-bold mb-2">Date Of Birth:</label><input type="date"  class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="dateOfBirth" name="dateOfBirth" type="text" value={birthday} onChange={(e)=> setBirthday(e.target.value)}></input>
                    <p class="text-red-600" id="dobError"></p>
                </div>

                <div class="md:w-1/2 px-3">
                    <label htmlFor="address" class="uppercase tracking-wide text-black text-s font-bold mb-2">Address:</label><input class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="address" name="address" type="text" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)}></input>
                    <p class="text-red-600" id="addressError"></p>
                </div>
                </div>
            </fieldset>
            <legend class="text-2xl font-bold mb-5 mt-2">Guardians Information <small class="text-sm">(Under age 18)</small></legend>
            <fieldset>
                <div class="-mx-3 md:flex mb-6">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="parentFirstName" class="uppercase tracking-wide text-black text-s font-bold mb-2">First Name:</label><input
                    class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="parentFirstName" name="parentFirstName"
                        type="text" placeholder="Guardians First Name" value={guardianFirstName} onChange={(e)=> setGuardianFirstName(e.target.value)}></input>
                    <p class="text-red-600" id="parentFirstNameError"></p>
                </div>
                <div class="md:w-1/2 px-3">
               
                    <label htmlFor="parentLastName" class="uppercase tracking-wide text-black text-s font-bold mb-2">Last Name:</label><input  class="w-full hover:bg-gray-200 focus:bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                        id="parentLastName" name="parentLastName" type="text" placeholder="Guardians Last Name" value={guardianLastName} onChange={(e)=> setGuardianLastName(e.target.value)}></input>
                    <p class="text-red-600" id="parentLastNameError"></p>
                </div>
                </div>
            </fieldset>
            <fieldset>
                <div class="flex flex-col mb-4">
                    <label htmlFor="parentPhoneNumber" class="uppercase tracking-wide text-black text-s font-bold mb-2">Phone Number:</label><input
                    class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="parentPhoneNumber" name="parentPhoneNumber"
                        type="text" placeholder="Guardians Phone number" value={guardianPhoneNumber} onChange={(e)=> setGuardianPhoneNumber(e.target.value)}></input>
                    <p class="text-red-600" id="parentPhoneNumberError"></p>
                </div>
            </fieldset>
            <legend class="text-2xl font-bold mb-5 mt-2">Skill Testing Question</legend>
            <fieldset>
                <div class="flex flex-col mb-4">
                    <label htmlFor="skillTestQuestion" class="uppercase tracking-wide text-black text-s font-bold mb-2">55 + 40 / 2 equals:</label><input
                    class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="skillTestQuestion" name="parentPhoneNumber"
                        type="text" placeholder="Your answer" value={skillTestQuestion} onChange={(e)=> setSkillTestQuestion(e.target.value)}></input>
                    <p class="text-red-600" id="skillTestQuestionError"></p>
                </div>
                <div class="mt-2">
                    <div>
                        <label class="inline-flex items-center">
                            <input name="formCheckBox" type="checkbox" id="checkOne" required></input>
                            <span class="ml-2">I agree to the <a href="/">rules and regulations.</a></span>
                        </label>
                        <p class="text-red-600" id="text">Please check the box.</p>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input name="formCheckBox" type="checkbox" id="checkTwo" required></input>
                            <span class="ml-2">I agree to the <a href="/">terms and conditions</a> and <a
                                    href="/">privacy policy.</a></span>
                        </label>
                        <p class="text-red-600" id="textTwo">Please check the box.</p>
                    </div>
                    <div>
                        <label class="inline-flex items-center">
                            <input name="formCheckBox" type="checkbox"></input>
                            <span class="ml-2">I consent to receiving emails regarding our products,
                                newsletter, and up-coming promotions.</span>
                        </label>
                        <h2 class="text-xl pt-5 font-bold">Disclaimer:</h2>
                        <p class="italic text-sm mb-2">Winners will be determined by random draw, but may have
                            their enteries removed for any reason by the judges.</p>
                    </div>
                </div>
            </fieldset>
            
            
            
            <button class="rounded bg-green-600 text-white p-3 mt-2 mb-5 align-right" type="submit" value="submit" id="formSubmit" onClick={handleSubmit}>Agree &amp; Submit</button>
            
        </form>
        </div>
    </div>
</div>
    )
};







export default FormInputs;