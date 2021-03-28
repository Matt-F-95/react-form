function Form() {
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
            <form class="milkForm" action="#">
                
                <legend class="text-2xl mb-5 mt-2 font-bold">Contestant Information</legend>
                <fieldset>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label for="firstName" class="uppercase tracking-wide text-black text-s font-bold mb-2">First Name:</label><input  class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="firstName" name="firstName" type="text" placeholder="First Name"></input>
                        <p class="text-red-600" id="firstNameError"></p>
                    </div>
                    <div class="md:w-1/2 px-3">
                        <label for="lastName" class="uppercase tracking-wide text-black text-s font-bold mb-2">Last Name:</label><input class="w-full hover:bg-gray-200 focus:bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="lastName" name="lastName" type="text" placeholder="Last Name"></input>
                        <p class="text-red-600" id="lastNameError"></p>
                    </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label for="emailAddress" class="uppercase tracking-wide text-black text-s font-bold mb-2">Email Address:</label><input
                        class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="emailAddress" name="emailAddress" type="text"
                            placeholder="Email Address"></input>
                        <p class="text-red-600" id="emailAddressError"></p>
                    </div>

                    <div class="md:w-1/2 px-3">
                        <label for="phoneNumber" class="uppercase tracking-wide text-black text-s font-bold mb-2">Phone Number:</label><input  class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="phoneNumber" name="phoneNumber" type="text" placeholder="Phone number"></input>
                        <p class="text-red-600" id="phoneNumberError"></p>
                    </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label for="birthday" class="uppercase tracking-wide text-black text-s font-bold mb-2">Date Of Birth:</label><input type="date"  class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="dateOfBirth" name="dateOfBirth" type="text"></input>
                        <p class="text-red-600" id="dobError"></p>
                    </div>

                    <div class="md:w-1/2 px-3">
                        <label for="address" class="uppercase tracking-wide text-black text-s font-bold mb-2">Address:</label><input class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="address" name="address" type="text" placeholder="Address"></input>
                        <p class="text-red-600" id="addressError"></p>
                    </div>
                    </div>
                </fieldset>
                <legend class="text-2xl font-bold mb-5 mt-2">Guardians Information <small class="text-sm">(Under age 18)</small></legend>
                <fieldset>
                    <div class="-mx-3 md:flex mb-6">
                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label for="parentFirstName" class="uppercase tracking-wide text-black text-s font-bold mb-2">First Name:</label><input
                        class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="parentFirstName" name="parentFirstName"
                            type="text" placeholder="Guardians First Name"></input>
                        <p class="text-red-600" id="parentFirstNameError"></p>
                    </div>
                    <div class="md:w-1/2 px-3">
                   
                        <label for="parentLastName" class="uppercase tracking-wide text-black text-s font-bold mb-2">Last Name:</label><input  class="w-full hover:bg-gray-200 focus:bg-gray-200  text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            id="parentLastName" name="parentLastName" type="text" placeholder="Guardians Last Name"></input>
                        <p class="text-red-600" id="parentLastNameError"></p>
                    </div>
                    </div>
                </fieldset>
                <fieldset>
                    <div class="flex flex-col mb-4">
                        <label for="parentPhoneNumber" class="uppercase tracking-wide text-black text-s font-bold mb-2">Phone Number:</label><input
                        class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="parentPhoneNumber" name="parentPhoneNumber"
                            type="text" placeholder="Guardians Phone number"></input>
                        <p class="text-red-600" id="parentPhoneNumberError"></p>
                    </div>
                </fieldset>
                <legend class="text-2xl font-bold mb-5 mt-2">Skill Testing Question</legend>
                <fieldset>
                    <div class="flex flex-col mb-4">
                        <label for="skillTestQuestion" class="uppercase tracking-wide text-black text-s font-bold mb-2">55 + 40 / 2 equals:</label><input
                        class="w-full hover:bg-gray-200 focus:bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="skillTestQuestion" name="parentPhoneNumber"
                            type="text" placeholder="Your answer"></input>
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
                
                
                
                <button class="rounded bg-green-600 text-white p-3 mt-2 mb-5 align-right" type="submit" value="submit" id="formSubmit">Agree &amp; Submit</button>
                
            </form>
            </div>
        </div>
    </div>

       
    )



}
// (function randomizedBlurb() {
//     let blurbs = ['Chance to be featured on our website!'];
//     let randblurbs = Math.floor(Math.random() * blurbs.length);
//     document.getElementById('randomBlurbs').innerHTML = blurbs[randblurbs];
// })();





export default Form;