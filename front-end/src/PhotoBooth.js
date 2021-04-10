import React, { useState } from 'react';
import './App.css';
import Webcam from "react-webcam";
import Slider from './Slider'
import SidebarItem from './SidebarItem'
import PhotoBoothImage from './images/photo_booth_img.png';
import Sticker_one from './images/COW.svg';
import Sticker_two from './images/Moo.svg';
import Sticker_three from './images/NeedMilk.svg';
import Sticker_four from './images/JustMilk.svg';
import Sticker_five from './images/ILoveMilk.svg';
import Sticker_six from './images/MilkandCheese.svg';
import camera from './images/camera.svg';


const DEFAULT_OPTIONS = [
        {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
        },
        {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
        },
        {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
        },
        {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
        },
        {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
        }
]


function PhotoBooth() {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const selectedOption = options[selectedOptionIndex]
    const webcamRef = React.useRef(document.getElementById("app"));
    const [imgSrc, setImgSrc] = React.useState(null);
    const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    
        }, [webcamRef, setImgSrc]);

    const stickers1 = [Sticker_one, Sticker_two, Sticker_three, ]
    const stickers2 = [ Sticker_four, Sticker_five, Sticker_six]
    const [mySticker, setMySticker] = useState('');
    
    function handleSliderChange({ target }) {
        setOptions(prevOptions => {
            return prevOptions.map((option, index) => {
            if (index !== selectedOptionIndex) return option
            return { ...option, value: target.value }
            })
        })
        }

    function SetStickerImage ({ src,className }){
        return <img className={className} src= {src} alt=""></img>
    }

    
    function getImageStyle() {
        const filters = options.map(option => {
        return `${option.property}(${option.value}${option.unit})`
        })
    
        return { filter: filters.join(' ') }
    }

    
	return (
		<div className="webCanvas" id ="webCanvas">
			<div className="app__container">
            <p className="text-5xl my-10">Milk Photobooth</p>
            <div className="flex lg:flex-row flex-col my-4">
                <div className ="lg:w-1/2 w-full m-4 flex items-center">
                    <img width="500" height="auto" id="photobooth_image" className="m-auto" src={PhotoBoothImage} alt=""/>
                </div>
                <div className ="lg:w-1/2 w-full m-4 p-2">
                    <h1 className="text-3xl text-left mb-1">How to use the Photobooth</h1>
                        <ol className="instruction_list p-6 text-left">
                            <li className="leading-relaxed my-2 text-base">Click on the Photobooth Icon to play</li>
                            <li className="leading-relaxed my-2 text-base">Enter you details to enter the contest</li>
                            <li className="leading-relaxed my-2 text-base">Select your favorite filter to click images</li>
                            <li className="leading-relaxed my-2 text-base">Show the most active and healthy lifestyle in order to win the contest</li>
                            <li className="leading-relaxed my-2 text-base">Submit your picture to Photobooth contest </li>
                            <li className="leading-relaxed my-2 text-base">Click more photos to increase the chances to win </li>
                        </ol>
                </div> 
                </div>
            <div className ="webcam_section w-full " id ="photoContent">
                <div className="webcam__left webcamScreenshot relative mb-10" id ="photoContent">
                <Webcam
                        audio={false}
                        ref={webcamRef}
                        muted
                        autoPlay
                        screenshotFormat="image/jpeg"
                        className="app__videoFeed main-image w-full "
                        style={getImageStyle()}
                    />
                    {mySticker === Sticker_one && (<SetStickerImage className = {"stickerinWebcam1"} src ={Sticker_one}/>)}
                    {mySticker === Sticker_two && (<SetStickerImage className = {"stickerinWebcam2"} src ={Sticker_two}/>)}
                    {mySticker === Sticker_three && (<SetStickerImage className = {"stickerinWebcam3"} src ={Sticker_three}/>)}
                    {mySticker === Sticker_four && (<SetStickerImage className = {"stickerinWebcam4"} src ={Sticker_four}/>)}
                    {mySticker === Sticker_five && (<SetStickerImage className = {"stickerinWebcam5"} src ={Sticker_five}/>)}
                    {mySticker === Sticker_six && (<SetStickerImage className = {"stickerinWebcam6"} src ={Sticker_six}/>)}
                    <div className="camera-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={capture}><img src={camera} width ={30} height ={30} alt=""/></div>
                </div>
                <div className ="filter-right "> 
                    <div className="top-filters w-full">
                        <h1 className="text-2xl">Filters</h1>
                        <div className="sidebar ">
                            {options.map((option, index) => {
                                return (
                                    <SidebarItem
                                    key={index}
                                    name={option.name}
                                    active={index === selectedOptionIndex}
                                    handleClick={() => setSelectedOptionIndex(index)}
                                        />
                                    )
                                    })}
                            </div>
                            <Slider
                                min={selectedOption.range.min}
                                max={selectedOption.range.max}
                                value={selectedOption.value}
                                handleChange={handleSliderChange}
                            />
                        
                        </div>

                    <div className="bottom-filter w-full">
                        <h1 className="text-2xl">Stickers</h1>
                        <div className="stickerItems flex flex-row justify-around">
                            {stickers1.map(sticker => (
                            <div className= "sticker-button"
                                key = {sticker}
                                onClick = {() => setMySticker(sticker)}
                            >
                                <img className = "sticker-img" src= {sticker} alt="" />
                            </div>
                            ))}
                        </div>
                        <div className="stickerItems flex flex-row justify-around">
                            {stickers2.map(sticker => (
                            <div className= "sticker-button"
                                key = {sticker}
                                onClick = {() => setMySticker(sticker)}
                            >
                                <img className = "sticker-img" src={sticker}  alt=""/>
                            </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>

                <div width ={150}
                    height ={150}
                    id="imageCanvas"
                    ></div>
                
                
                {imgSrc && (
                    <img
                    src={imgSrc}
                    width ={150}
                    height ={150}
                    alt="webcam"
                    className = "img-stored"
                    />
                )}
			</div>
			<div className="app__input">
            
			</div>
            
        
		</div>
    
	);
}



export default PhotoBooth;